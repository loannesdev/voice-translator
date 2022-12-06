import React from 'react';
import { ReactComponent as FloppyDisk } from '../assets/icons/floppy-disk.svg';
import { ReactComponent as Ibeacon } from '../assets/icons/ibeacon.svg';
import { ReactComponent as InputLatinLetters } from '../assets/icons/input-latin-letters.svg';
import { ReactComponent as RegionalIndicatorZ } from '../assets/icons/regional-indicator-z.svg';
import binary from '../modules/binaryModule';
import radioAlphabet from '../modules/radioAlphabetModule';
import { optionsSignal, textAreaOneSignal, textAreaTwoSignal } from '../signals';

const OPT_ICONS_CLASS = 'h-10 w-10';
export const OPTIONS = [
  {
    id: 1,
    text: "Texto",
    icon: <InputLatinLetters className={OPT_ICONS_CLASS} />,
    click: () => { }
  },
  {
    id: 2,
    text: "Binario",
    icon: <FloppyDisk className={OPT_ICONS_CLASS} />,
    click: () => {
      binary({ text: textAreaOneSignal.value });
    }
  },
  {
    id: 3,
    text: "Alfabeto radiofónico",
    icon: <RegionalIndicatorZ className={OPT_ICONS_CLASS} />,
    click: () => {
      radioAlphabet({ text: textAreaOneSignal.value });
    }
  },
  {
    id: 4,
    text: "Código morse",
    icon: <Ibeacon className={OPT_ICONS_CLASS} />,
    click: () => { textAreaTwoSignal.value = '' }
  }
];

const classOption = (elm) => {
  const SELECTED_CLASS_TW = 'bg-blue-200 border-transparent text-blue-800';

  if (optionsSignal.value !== null && elm.id === optionsSignal?.value?.id) {
    return SELECTED_CLASS_TW;
  }

  if (optionsSignal.value === null && elm.id === 1) {
    return SELECTED_CLASS_TW;
  }
}

export default function Options() {
  return (
    <section className='flex gap-2 flex-col w-full'>
      <h2 className='font-bold text-lg'>Seleccione el modo de traducción</h2>

      <article className='flex gap-1 items-center flex-wrap'>
        {
          OPTIONS.map((elm) => {
            return (
              <button
                className={`${classOption(elm)} h-min justify-center flex items-center border-blue-200 border-2 rounded-xl px-2 font-semibold`}
                onClick={() => {
                  optionsSignal.value = elm;

                  elm?.click();
                }}
              >
                {elm.icon}
                {elm.text}
              </button>
            )
          })
        }
      </article>
    </section>
  )
}
