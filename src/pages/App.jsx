import { Toaster } from "react-hot-toast";
import { ReactComponent as StudioMicrophone } from "../assets/icons/studio-microphone.svg";
import Header from "../components/Header";
import Options from "../components/Options";
import TextArea from "../components/TextArea";
import { startListening, stopListening } from "../services/speech-recognition";
import store from "../store";
import { TRANSLATE_OPTIONS } from "../utils/constans";

const handlerSpeechConverter = () => {
  const optSelected = TRANSLATE_OPTIONS.find((elm) => elm.keyWord === store.option.value);
  const { action } = optSelected;

  return action(store.firstText.value) ?? store.firstText.value;
};

export default function App() {
  return (
    <>
      <Toaster />
      <Header />

      <main className="max-w-[80ch] grid gap-16 h-full py-8 w-full">
        <h1 className="text-5xl font-extrabold text-center">Traductor voz a texto</h1>

        <section className="grid gap-5">
          <Options />

          <section className="flex gap-3 flex-col">
            <div className="flex gap-2 items-center max-sm:flex-wrap">
              <button
                className="bg-blue-600 text-slate-50 w-full rounded p-3 font-extrabold active:bg-blue-500 transition-colors hover:bg-blue-700 leading-none"
                onClick={() => {
                  store.isHearing.value
                    ? stopListening()
                    : startListening();
                }}
              >
                {store.isHearing.value ? "Terminar de escuchar" : "Empezar a escuchar"}
              </button>

              {
                store.isHearing.value && (
                  <div className="flex gap-1 items-center">
                    <StudioMicrophone className="h-10 w-10" />
                    <small>Escuchando...</small>
                  </div>
                )
              }
            </div>

            {
              store.isHearing.value && (<p className="font-medium text-red-500 bg-red-100 rounded-xl max-w-fit py-1 px-3 self-center leading-none">Hable fuerte y claro</p>)
            }
          </section>

          <TextArea text={store.firstText.value} flag="first" />

          {
            store.option.value !== "text" && (
              <TextArea text={handlerSpeechConverter()} flag="second" />
            )
          }
        </section>
      </main>
    </>
  );
}
