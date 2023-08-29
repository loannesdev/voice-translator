import { ReactComponent as FloppyDisk } from "../assets/icons/floppy-disk.svg";
import { ReactComponent as Ibeacon } from "../assets/icons/ibeacon.svg";
import { ReactComponent as InputLatinLetters } from "../assets/icons/input-latin-letters.svg";
import { ReactComponent as RegionalIndicatorZ } from "../assets/icons/regional-indicator-z.svg";
import { binary, radioAlphabet } from "./coding-modules";

const iconStyle = "h-10 w-10";

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
    icon: <InputLatinLetters className={iconStyle} />,
    action: (param) => { console.log(param); }
  },
  {
    keyWord: "binary",
    text: "Binario",
    icon: <FloppyDisk className={iconStyle} />,
    action: (param) => binary(param)
  },
  {
    keyWord: "radiophonicAlphabet",
    text: "Alfabeto radiofónico",
    icon: <RegionalIndicatorZ className={iconStyle} />,
    action: (param) => radioAlphabet(param)
  },
  {
    keyWord: "morseCode",
    text: "Código morse",
    icon: <Ibeacon className={iconStyle} />,
    action: (param) => {
    }
  }
];
