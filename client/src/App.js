import React, { useState, useEffect, createContext } from "react";
//import logo from "./logo.svg";
import "./App.css";

import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import 'react-chatbot-kit/build/main.css';
import Carousel from "nuka-carousel";
import NavBar from "./componements/NavBar";
import Result from "./componements/ResultPage/Result";
import Footer from './componements/Footer';
import { Box, Typography } from "@mui/material";

export const Context = createContext()
export const Stored = createContext()

const style = {
  position: 'absolute',
  top: '50%',
  left: '75%',
  transform: 'translate(-50%, -50%)',
  width: "30vh",
  bgcolor: "#376B7E",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: "White"
};
function App() {
  const botName = "APP_NAME"
  const [setting, setSetting] = useState({ allergic: [], dietary: [] });
  const [stored, setStored] = useState([]);
  const [show, toggleShow] = useState(false)
  useEffect(() => {
    const handleSubmitClick = (e) => {
      if (e.target.classList.contains('submit')) {
        toggleShow(true)
      }
      if (e.target.classList.contains('modify')) {
        toggleShow(false)
      }
    }

    window.addEventListener("click", handleSubmitClick)

    return () => {
      window.removeEventListener("click", handleSubmitClick)
    }
  }, [])

  const defaultControlsConfig = {
    nextButtonStyle: {
      display: 'none'
    },
    prevButtonStyle: {
      display: 'none'
    },
    pagingDotsStyle: {
      display: 'none'
    }
  }

  return (
    <div className="App">


      <Context.Provider value={[setting, setSetting]} >
        <Stored.Provider value={[stored, setStored]}>

          <NavBar app_name={botName} />
        </Stored.Provider>
        <Carousel defaultControlsConfig={defaultControlsConfig}>

          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            headerText='APP_NAME'
          />
          {show ?
            <Stored.Provider value={[stored, setStored]}>
              <Result />
            </Stored.Provider>
            :
            <div>
              <Box sx={style} >
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Set your preferance first! Then your food will be show here!
                </Typography>
              </Box>
            </div>

          }
        </Carousel>
      </Context.Provider>
      <Footer />
    </div>
    //<SimpleForm></SimpleForm>
  );
}

export default App;