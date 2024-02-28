import ComputerIcon from "../assets/icons/computer.svg?react";
import FloppyDiskIcon from "../assets/icons/floppy-disk.svg?react";
import IbeaconIcon from "../assets/icons/ibeacon.svg?react";
import InputLatinLettersIcon from "../assets/icons/input-latin-letters.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import RegionalIndicatorZIcon from "../assets/icons/regional-indicator-z.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import { binary, morse, radioAlphabet } from "./coding-modules";

export const RADIO_ALPHABETICAL_DICTIONARY = [
  "alfa",
  "bravo",
  "charlie",
  "delta",
  "echo",
  "foxtrot",
  "golf",
  "hotel",
  "india",
  "juliet",
  "kilo",
  "lima",
  "mike",
  "november",
  "oscar",
  "papa",
  "quebec",
  "romeo",
  "sierra",
  "tango",
  "uniform",
  "victor",
  "whiskey",
  "x-ray",
  "yankee",
  "zulu"
];

export const TRANSLATE_OPTIONS = [
  {
    keyWord: "text",
    text: "Texto",
    icon: InputLatinLettersIcon
  },
  {
    keyWord: "binary",
    text: "Binario",
    icon: FloppyDiskIcon,
    action: (txt) => binary(txt)
  },
  {
    keyWord: "radiophonicAlphabet",
    text: "Alfabeto radiofónico",
    icon: RegionalIndicatorZIcon,
    action: (txt) => radioAlphabet(txt)
  },
  {
    keyWord: "morseCode",
    text: "Código morse",
    icon: IbeaconIcon,
    action: (txt) => morse(txt)
  }
];

export const DARK_MODE_OPTIONS = {
  light: {
    key: Symbol("light"),
    text: "Claro",
    icon: SunIcon
  },
  dark: {
    key: Symbol("dark"),
    text: "Oscuro",
    icon: MoonIcon
  },
  system: {
    key: Symbol("system"),
    text: "Sistema",
    icon: ComputerIcon
  }
};

export const MORSE_DICTIONARY = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  ñ: "--.--",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
}
