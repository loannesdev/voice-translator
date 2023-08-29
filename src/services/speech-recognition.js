import store from "../store";

class CustomSpeechRecognition {
  constructor() {
    this.recognition = new webkitSpeechRecognition();

    this.recognition.lang = "es-ES";
    this.recognition.continuous = true;

    this.recognition.onstart = () => {
      store.isHearing.value = true;
    };

    this.recognition.onend = () => {
      store.isHearing.value = false;
    };

    this.recognition.onresult = (event) => {
      const eventResults = event?.results;
      let { transcript: newText } = eventResults[eventResults.length - 1][0];

      // Delete the final point of the text
      if (newText[newText.length - 1] === ".") {
        newText = newText.slice(0, -1);
      }

      store.firstText.value = newText;
    };
  }

  startListening() {
    this.recognition.start();
  }

  stopListening() {
    this.recognition.stop();
  }
}

export default new CustomSpeechRecognition();
