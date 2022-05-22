import React, { useContext, useState } from "react";
import { Context } from "../../App";
import Gallery from "./Gallery";

const Result = () => {
    const [setting, setSetting] = useContext(Context);
    const allergic = setting.allergic.length > 0 ? setting.allergic.join(',') : "none"
    const dietary = setting.dietary.length > 0 ? setting.dietary.join(',') : "none"
    const [result, setData] = useState({})

    React.useEffect(() => {
        fetch("/allergic/" + allergic + '/diet/' + dietary)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, []);

    return (
        <div className="result">
            {result.entress &&
                <div>
                    <Gallery data={result} />
                </div>
            }
        </div>
    )
}

export default Result



// appetizer: [
//     {
//     id: 733459,
//     title: "Hummus Veggie Wrap",
//     image: "https://spoonacular.com/recipeImages/733459-312x231.jpg",
//     imageType: "jpg"
//     },
//     {
//     id: 502318,
//     title: "Slow-Roasted Cherry Tomatoes: A Simple Summer Appetizer",
//     image: "https://spoonacular.com/recipeImages/502318-312x231.jpg",
//     imageType: "jpg"
//     }
//     ],
//     entress: [
//     {
//     id: 547775,
//     title: "Creamy Avocado Pasta",
//     image: "https://spoonacular.com/recipeImages/547775-312x231.jpg",
//     imageType: "jpg"
//     },
//     {
//     id: 547899,
//     title: "Sweet Potato and Black Bean Mexican Salad",
//     image: "https://spoonacular.com/recipeImages/547899-312x231.jpg",
//     imageType: "jpg"
//     }
//     ],
//     drink: [
//     {
//     id: 516705,
//     title: "Kale Smoothie (Delicious, Healthy and Vegan!)",
//     image: "https://spoonacular.com/recipeImages/516705-312x231.jpg",
//     imageType: "jpg"
//     },
//     {
//     id: 586981,
//     title: "Favorite* Green Juice",
//     image: "https://spoonacular.com/recipeImages/586981-312x231.jpg",
//     imageType: "jpg"
//     }
//     ]