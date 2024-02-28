import { describe, expect, test } from "vitest";
import { binary, morse, radioAlphabet } from "../src/utils/coding-modules";

describe.concurrent("Check the modules functionality", () => {
  test.concurrent("Binary function", () => {
    expect(binary("Hi world!"))
      .equal("01001000 01101001 00100000 01110111 01101111 01110010 01101100 01100100 00100001");
    expect(binary("tEst message (uppercase & lowercase)"))
      .equal("01110100 01000101 01110011 01110100 00100000 01101101 01100101 01110011 01110011 01100001 01100111 01100101 00100000 00101000 01110101 01110000 01110000 01100101 01110010 01100011 01100001 01110011 01100101 00100000 00100110 00100000 01101100 01101111 01110111 01100101 01110010 01100011 01100001 01110011 01100101 00101001");
  });

  test.concurrent("Radio alphabet function", () => {
    expect(radioAlphabet("Hi world!*()")).toBe("hotel-india whiskey-oscar-romeo-lima-delta");
    expect(radioAlphabet("TESTING RADIO ALPHABET")).toBe("tango-echo-sierra-tango-india-november-golf romeo-alfa-delta-india-oscar alfa-lima-papa-hotel-alfa-bravo-echo-tango");
  });

  test.concurrent("Morse function", () => {
    expect(morse("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))
      .toBe(".-.. --- .-. . -- / .. .--. ... ..- -- / -.. --- .-.. --- .-. / ... .. - / .- -- . - --..-- / -.-. --- -. ... . -.-. - . - ..- .-. / .- -.. .. .--. .. ... -.-. .. -. --. / . .-.. .. - --..-- / ... . -.. / -.. --- / . .. ..- ... -- --- -.. / - . -- .--. --- .-. / .. -. -.-. .. -.. .. -.. ..- -. - / ..- - / .-.. .- -... --- .-. . / . - / -.. --- .-.. --- .-. . / -- .- --. -. .- / .- .-.. .. --.- ..- .- .-.-.-");
  });
})