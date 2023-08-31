import store from "../store";

const recognition = new webkitSpeechRecognition();

recognition.lang = "es-ES";
recognition.continuous = true;

recognition.onstart = () => {
  store.isHearing.value = true;
};

recognition.onend = () => {
  store.isHearing.value = false;
};

recognition.onresult = (event) => {
  const eventResults = event?.results;
  let { transcript: newText } = eventResults[eventResults.length - 1][0];

  // Delete the final point of the text
  if (newText[newText.length - 1] === ".") {
    newText = newText.slice(0, -1);
  }

  store.firstText.value = newText;
};

export const startListening = () => {
  recognition.start();
};

export const stopListening = () => {
  recognition.stop();
};
