import store from "../store";
import { TRANSLATE_OPTIONS } from "../utils/constants";

const buttonClass = "h-min border border-zinc-200 hover:bg-zinc-100 rounded py-0.5 px-2 gap-0.5 dark:bg-[#fafafa26] dark:hover:border-sky-300";
const buttonSelectedClass = "border-sky-300 font-medium dark:text-sky-300";

export default function Options() {
  return (
    <section className="flex gap-2 flex-col w-full">
      <h2 className="font-semibold text-lg">Seleccione el modo de traducción</h2>

      <div className="flex gap-2 items-center flex-wrap">
        {
          TRANSLATE_OPTIONS.map(({ icon, text, keyWord }) => {
            return (
              <button
                className={store.option.value === keyWord ? `${buttonClass} ${buttonSelectedClass}` : buttonClass}
                onClick={() => {
                  store.option.value = keyWord;
                }}
                key={keyWord}
              >
                <div className="flex items-center gap-0.5">
                  {icon}
                  <span className="tracking-wide leading-none">{text}</span>
                </div>
              </button>
            );
          })
        }
      </div>
    </section>
  );
}
