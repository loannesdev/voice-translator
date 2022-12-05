import { render } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { toast, Toaster } from 'react-hot-toast';
import { ReactComponent as Broom } from './assets/icons/broom.svg';
import { ReactComponent as Copy } from './assets/icons/copy.svg';
import { ReactComponent as SpeakingHead } from './assets/icons/speaking-head.svg';
import { ReactComponent as StudioMicrophone } from './assets/icons/studio-microphone.svg';
import Options, { OPTIONS } from './components/Options';
import './index.css';
import { optionsSignal, textAreaOneSignal, textAreaTwoSignal } from './signals/index';

const UTILS_ICONS_CLASS = 'h-9 w-9';
const UTILS_BUTTONS_CLASS = 'outline-sky-500 outline outline-1 rounded-xl active:bg-blue-200';

function App() {
  const [hearing, setHearing] = useState(false)
  const recognition = new (webkitSpeechRecognition)();
  const textAreaOneRef = useRef();
  const textAreaTwoRef = useRef();

  recognition.lang = "es-ES"
  recognition.continuous = true

  recognition.onresult = evt => {
    const LAST_VALUE = Object.keys(evt.results).length - 1
    const TEXT = evt.results[LAST_VALUE][0].transcript;

    textAreaOneSignal.value = TEXT;
    if (optionsSignal.value !== null) OPTIONS.find(elm => elm.id === optionsSignal.value.id).click();

  }

  recognition.onstart = () => {
    setHearing(true)
  }

  recognition.onend = () => {
    setHearing(false)
  }

  recognition.onnomatch = () => {
    console.log('I didnt recognise that color.')
    setHearing(false)
  }

  recognition.onerror = (event) => {
    console.log('Error: ' + event.error)
    setHearing(false)
  }

  recognition.onaudioend = () => setHearing(false);
  recognition.onsoundend = () => setHearing(false);
  recognition.onspeechend = () => setHearing(false);

  return (
    <main className='bg-white grid transition-all pt-16 pb-5 p-10 auto-rows-min gap-9 sm:px-32 md:px-48 lg:px-60 xl:px-[30rem] h-screen'>
      <Options />

      <section className='w-full flex gap-4 flex-wrap'>
        <article className='w-full flex gap-2'>
          {
            textAreaOneSignal.value.length > 0
            && (
              <div className='flex flex-col top-0 right-0 gap-2'>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(textAreaOneRef.current.value);
                    toast('Texto copiado');
                  }}
                  className={UTILS_BUTTONS_CLASS}
                  title='Copiar texto'
                >
                  <Copy className={UTILS_ICONS_CLASS} />
                </button>

                <button
                  onClick={() => {
                    textAreaOneSignal.value = '';
                    toast('Texto eliminado');
                  }}
                  className={UTILS_BUTTONS_CLASS}
                  title='Limpiar texto'
                >
                  <Broom className={UTILS_ICONS_CLASS} />
                </button>

                <button
                  className={UTILS_BUTTONS_CLASS}
                  onClick={() => {
                    // Speech text
                  }}
                  title='Leer texto'
                >
                  <SpeakingHead className={UTILS_ICONS_CLASS} />
                </button>
              </div>
            )
          }

          <textarea
            className='border-2 border-sky-500 border-solid rounded-xl px-2 py-1 outline-none min-h-[200px] transition-all w-full'
            readOnly
            onChange={(evt) => { textAreaOneSignal.value = evt.target.value }}
            value={textAreaOneSignal.value}
            ref={textAreaOneRef}
          />
        </article>

        {
          optionsSignal.value !== null && optionsSignal.value?.id > 1 && (
            <article className='w-full flex gap-2'>
              {
                textAreaTwoSignal.value.length > 0 && (
                  <div className='flex flex-col top-0 right-0 gap-2'>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(textAreaTwoRef.current.value);
                        toast('Texto copiado');
                      }}
                      className={UTILS_BUTTONS_CLASS}
                      title='Copiar texto'
                    >
                      <Copy className={UTILS_ICONS_CLASS} />
                    </button>

                    <button
                      onClick={() => {
                        textAreaTwoSignal.value = '';
                        toast('Texto eliminado');
                      }}
                      className={UTILS_BUTTONS_CLASS}
                      title='Limpiar texto'
                    >
                      <Broom className={UTILS_ICONS_CLASS} />
                    </button>
                  </div>
                )
              }

              <textarea
                className='border-2 border-sky-500 border-solid rounded-xl px-2 py-1 outline-none min-h-[200px] transition-all w-full'
                readOnly
                value={textAreaTwoSignal.value}
                ref={textAreaTwoRef}
              />
            </article>
          )
        }
      </section>

      <section className='flex gap-4 max-md:flex-wrap justify-center'>
        <button
          className='bg-blue-600 text-slate-50 w-full rounded-xl py-2 px-4 font-bold active:bg-blue-500 transition-colors'
          onClick={() => {
            if (hearing) {
              recognition.stop();
            } else {
              recognition.start();
            }
          }}
        >
          {!hearing ? 'Empezar a escuchar' : 'Terminar de escuchar'}
        </button>


        {
          hearing && (
            <div className='flex gap-2 items-center'>
              <StudioMicrophone className='h-10 w-10' />
              <small>Escuchando...</small>
            </div>
          )
        }
      </section>
    </main>
  )
}

render(
  <>
    <Toaster />
    <App />
  </>,
  document.getElementById('app')
);