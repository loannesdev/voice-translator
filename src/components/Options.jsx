import store from "../store";
import { TRANSLATE_OPTIONS } from "../utils/constans";

const options = TRANSLATE_OPTIONS;
const buttonClass = "h-min outline outline-blue-500 outline-1 rounded py-0.5 px-2 font-semibold gap-0.5";
const buttonSelectedClass = "bg-blue-200 text-blue-700";

export default function Options() {
  return (
    <section className="flex gap-2 flex-col w-full">
      <h2 className="font-semibold text-lg">Seleccione el modo de traducción</h2>

      <div className="flex gap-2 items-center flex-wrap">
        {
          options.map(({ icon, text, keyWord }) => {
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
                  <span className="font-normal tracking-wide leading-none">{text}</span>
                </div>
              </button>
            );
          })
        }
      </div>
    </section>
  );
}
