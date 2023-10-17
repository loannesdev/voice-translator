import { ReactComponent as ComputerIcon } from "../assets/icons/computer.svg";
import { ReactComponent as FloppyDiskIcon } from "../assets/icons/floppy-disk.svg";
import { ReactComponent as IbeaconIcon } from "../assets/icons/ibeacon.svg";
import { ReactComponent as InputLatinLettersIcon } from "../assets/icons/input-latin-letters.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as RegionalIndicatorZIcon } from "../assets/icons/regional-indicator-z.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { binary, morse, radioAlphabet } from "./coding-modules";

const translateOptionsIcons = "h-10 w-10";
const iconsDarkModeClass = "h-6 w-6";

export const RADIO_ALPHABETICAL_DICTIONARY = [
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu"
];

export const TRANSLATE_OPTIONS = [
  {
    keyWord: "text",
    text: "Texto",
    icon: <InputLatinLettersIcon className={translateOptionsIcons} />
  },
  {
    keyWord: "binary",
    text: "Binario",
    icon: <FloppyDiskIcon className={translateOptionsIcons} />,
    action: (txt) => binary(txt)
  },
  {
    keyWord: "radiophonicAlphabet",
    text: "Alfabeto radiofónico",
    icon: <RegionalIndicatorZIcon className={translateOptionsIcons} />,
    action: (txt) => radioAlphabet(txt)
  },
  {
    keyWord: "morseCode",
    text: "Código morse",
    icon: <IbeaconIcon className={translateOptionsIcons} />,
    action: (txt) => morse(txt)
  }
];

export const DARK_MODE_OPTIONS = {
  light: {
    key: Symbol("light"),
    text: "Claro",
    icon: <SunIcon className={iconsDarkModeClass} />
  },
  dark: {
    key: Symbol("dark"),
    text: "Oscuro",
    icon: <MoonIcon className={iconsDarkModeClass} />
  },
  system: {
    key: Symbol("system"),
    text: "Sistema",
    icon: <ComputerIcon className={iconsDarkModeClass} />
  }
};

export const MORSE_DICTIONARY = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: "·",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-",
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
