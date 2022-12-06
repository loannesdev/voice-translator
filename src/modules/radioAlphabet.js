import { textAreaTwoSignal } from "../signals";

const ALPHABET = {
  a: "Alfa",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliet",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
  " ": "_"
};

export default function radioAlphabet({ text }) {
  const WORDS = text.toLowerCase().split('');
  let RES = [];

  WORDS.forEach((elm) => {
    if (ALPHABET[elm]) RES.push(ALPHABET[elm]);
  });

  textAreaTwoSignal.value = RES.join(' ');
}
