import toast from "react-hot-toast";

export const readText = (text) => {
  if (!text.length) {
    toast("No hay texto para escuchar");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};
