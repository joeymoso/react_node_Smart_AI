const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const axios = require('axios');

app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('pages/index.html'));
// });

app.get('/summary/:id', (req, res) => {
  console.log(req.params.id)

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+ req.params.id +'/summary',
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'RAPIDAPI_KEY'
    }
  };

  axios.request(options).then(function (response) {
    res.status(200).send(response.data).end();
  }).catch(function (error) {
    console.error(error);
  });
})

app.get('/allergic/:allergic/diet/:diet',  async (req, res) => {

  const allergic = req.params.allergic
  const diet = req.params.diet
  const offset = Math.floor(Math.random() * 11);

  //'vegetarian'
  //'coconut, mango'
  // The number of results to skip
  const options1 = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {
      diet: req.params.allergic,
      instructionsRequired: 'true',
      intolerances: req.params.diet,
      type: "appetizer",
      offset:offset,
      number: 5
    },
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'RAPIDAPI_KEY'
    }
  };
  const options2 = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {
      diet: req.params.allergic,
      instructionsRequired: 'true',
      intolerances: req.params.diet,
      type: "main course",
      offset:offset,
      number: 2
    },
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'RAPIDAPI_KEY'
    }
  };
  const options3 = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {
      diet: req.params.allergic,
      instructionsRequired: 'true',
      intolerances: req.params.diet,
      type: "drink",
      offset:offset,
      number: 2
    },
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'RAPIDAPI_KEY'
    }
  };

  if(allergic == "none"){
      delete options1.params["intolerances"]
      delete options2.params["intolerances"]
      delete options3.params["intolerances"]
  }

  if(diet == "none"){
    delete options1.params["diet"]
    delete options2.params["diet"]
    delete options3.params["diet"]
}


  try {



    const [appetizer, entress, drink] = await Promise.all([
      axios.request(options1),
      axios.request(options2),
      axios.request(options3),
    ]);

    var result = {
      'appetizer': appetizer.data.results,
      'entress': entress.data.results,
      'drink': drink.data.results,
    }
    console.log(allergic)
    res.status(200).send(result).end();
  }
  catch (error) {
    console.log(error)
    res.status(200).send(error).end();
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
