import { MORSE_DICTIONARY, RADIO_ALPHABETICAL_DICTIONARY } from "./constants";

export const binary = (text) => {
  const splitText = text.split("");

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
  const parsedText = text
    .toLowerCase()
    .split(" ");
  const dictionary = RADIO_ALPHABETICAL_DICTIONARY;

  const result = parsedText.map((section) => {
    const sectionArray = section.replaceAll(/[^a-zA-Z0-9]/g, "") // Replace all special characters
      .split("");

    const parsedWord = sectionArray.map((letter) => {
      const foundLetter = dictionary.find((word) => word[0].toLowerCase() === letter);
      return foundLetter ?? letter;
    });

    return parsedWord.join("-");
  });

  return result.join(" ");
};

const accentLetters = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u"
}

export const morse = (text) => {
  const parsedText = text.toLowerCase().split("");

  const result = parsedText.map((letter) => {
    if (MORSE_DICTIONARY[letter]) {
      return MORSE_DICTIONARY[letter];
    }
    if (accentLetters[letter]) {
      return MORSE_DICTIONARY[accentLetters[letter]];
    }

    return letter;
  })

  return result.join(" ");
}
