import React from "react";
import { createChatBotMessage} from "react-chatbot-kit";

import Allergic from "./Widgets/Allergic"
import Dietary from "./Widgets/Dietary";
import Options from "./Widgets/Options";
import NewSession from "./Widgets/NewSession";
const botName = "APP_NAME";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hello, I'm ${botName}, your smart A.I. Waiter. Before we get started, let's get some basic info.`, {
        delay: 500,
      }),
    createChatBotMessage(
      `Which of the following are you allergic to? `,{
        withAvatar: true,
        delay: 1000,
        widget: "allergic",
      }),
  ],
  state: {
    allergic: [],
    dietary: [],
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "allergic",
      widgetFunc: (props) => <Allergic {...props} />,
      mapStateToProps: ["allergic"],
    },
    {
      widgetName: "dietary",
      widgetFunc: (props) => <Dietary {...props} />,
      mapStateToProps: ["allergic","dietary"],
    },
    {
      widgetName: "newsession",
      widgetFunc: (props) => <NewSession {...props} />,
      mapStateToProps: ["allergic","dietary"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["allergic","dietary"],
    },
  ],
};

export default config;