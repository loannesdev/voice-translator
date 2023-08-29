import { RADIO_ALPHABETICAL_DICTIONARY } from "./constans";

export const binary = (text) => {
  const splitText = text.trim().split("");

  return splitText.map((letter) => {
    const asciiValue = letter.charCodeAt();
    const binary = [];
    let auxiliar = asciiValue;

    while (binary.length <= 7) {
      binary.push(Math.floor(auxiliar % 2));
      auxiliar /= 2;
    }

    return binary.reverse().join("");
  })
    .join(" ");
};

export const radioAlphabet = (text) => {
  const parsedText = text.trim().toLowerCase().split(" ");
  const dictionary = RADIO_ALPHABETICAL_DICTIONARY;

  const result = parsedText.map((section) => {
    const sectionArray = section.split("");

    const parsedWord = sectionArray.map((letter) => {
      const foundLetter = dictionary.find((word) => word[0].toLowerCase() === letter);
      return foundLetter ?? letter;
    });

    const isEqual = sectionArray.every((item, index) => item === parsedWord[index]);

    return isEqual ? parsedWord.join("") : parsedWord.join("-");
  });

  return result.join(" ");
};
