import { textAreaTwoSignal } from "../signals";

export default function Binary({ text }) {
  const ARR_TEXT = text.split('');
  let resultBinaryNum = [];

  ARR_TEXT.forEach((elm) => {
    let operationMath = elm.charCodeAt();
    let word = [];

    while (true) {
      word.push(Math.floor(operationMath % 2));
      operationMath /= 2;

      if (word.length === 8) {
        word.reverse()
        resultBinaryNum.push(word.join('', ','))

        break;
      };
    }
  })

  textAreaTwoSignal.value = resultBinaryNum.join(' ', ',');
}