import toast from "react-hot-toast";
import { ReactComponent as Broom } from "../assets/icons/broom.svg";
import { ReactComponent as Duplicate } from "../assets/icons/duplicate.svg";
import { ReactComponent as SpeakerHighVolume } from "../assets/icons/speaker-high-volume.svg";
import { readText } from "../services/speech-synthesis";
import store from "../store";

const iconsClass = "h-9 w-9";
const buttonsClass = "border border-sky-300 rounded active:bg-zinc-100 dark:active:bg-[#fafafa1a]";

export default function TextArea({ text, flag }) {
  return (
    <section className="flex gap-1.5">
      <div className="flex flex-col gap-1.5">
        <button
          onClick={() => {
            navigator.clipboard.writeText(text);
            toast("Texto copiado");
          }}
          className={buttonsClass}
          title="Copiar texto"
        >
          <Duplicate className={iconsClass} />
        </button>

        {
          flag === "first" && (
            <>
              <button
                onClick={() => {
                  store.firstText.value = "";
                  toast("Texto eliminado");
                }}
                className={buttonsClass}
                title="Limpiar texto"
              >
                <Broom className={iconsClass} />
              </button>

              <button
                className={buttonsClass}
                onClick={() => {
                  readText(text);
                }}
                title="Leer texto"
              >
                <SpeakerHighVolume className={iconsClass} />
              </button>
            </>
          )
        }
      </div>

      <textarea disabled className="border border-sky-300 rounded px-2 py-1 min-h-[200px] transition-all w-full dark:bg-[#fafafa1a]">
        {text}
      </textarea>
    </section>
  );
}
