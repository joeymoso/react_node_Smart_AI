class ActionProvider {
  
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.stateRef = stateRef
    this.createClientMessage = createClientMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  // handleDefault = () => {

  //   const messages = this.createChatBotMessage(
  //     "Which of the following are you allergic to?",
  //     { widget: "allergic", withAvatar: true }
  //   );
  //   this.setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, messages],
  //   }));
  // }

  handleDietary = (allergic) => {
    const clientMessage = this.createClientMessage(allergic.length > 0 ? `I'm allergic to ` + allergic.join(', '): `None of them!`, {delay: 500})
    const message = this.createChatBotMessage(`Okay, please select your dietary preferance`, {
      widget: 'dietary'
    });
    this.addMessageToState(clientMessage)
    this.addMessageToState(message)
  };

  handleAllergic = (cMessage) => {
    const clientMessage = this.createClientMessage(cMessage)
    const message = this.createChatBotMessage(`Which of the following are you allergic to?`, {
      widget: 'allergic'
    });

    this.addMessageToState(clientMessage)
    this.addMessageToState(message)
  };

  handleSettingDone = () => {
    const clientMessage = this.createClientMessage(`Find me recipes!`)

    const message = this.createChatBotMessage("Great, thank you! We're creating a list based on your choice! Swipe left to see the recommended recipes!", {
      withAvatar: true,
      widget: 'newsession'
    });

    this.addMessageToState(clientMessage)
    this.addMessageToState(message)
  }

  handleSummary = (dietary, summary) => {
    const clientMessage = this.createClientMessage(dietary.length > 0 ? dietary.join(', '): `None of them!`, {delay: 500})
    
    const message1 = this.createChatBotMessage(summary, {
      withAvatar: true,
    });
    const message2 = this.createChatBotMessage(`Gotya! Do you want to change your preference?`, {
      widget:"options",
      withAvatar: true,
      delay: 500,
    });
    this.addMessageToState(clientMessage)
    this.addMessageToState(message1)
    this.addMessageToState(message2)
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
