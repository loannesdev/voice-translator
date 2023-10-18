import { useMemo, useState } from "preact/hooks";
import store from "../store";
import { DARK_MODE_OPTIONS } from "../utils/constants";

const iconsDarkModeClass = "h-6 w-6";

export default function Header() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const DarkModeIconButton = useMemo(() => {
    return store.darkMode.value?.icon

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.darkMode.value])

  return (
    <header className="max-w-[80ch] w-full grid h-fit place-items-center sticky top-0 backdrop-blur-sm py-4">
      <div className="justify-self-end flex flex-col">
        <button
          className="rounded flex gap-2 items-center px-2 py-1 border border-zinc-200 hover:bg-[#fafafa26] dark:border-cyan-100"
          onClick={() => {
            setIsDropdownActive(!isDropdownActive);
          }}
          type="button"
        >
          <DarkModeIconButton className="w-6 h-6" />
        </button>

        <ul
          id="dropdown"
          class={`${isDropdownActive ? "" : "hidden "}text-sm rounded shadow w-min fixed top-14 right-0 bg-white dark:bg-[#0f1a2f] dark:shadow dark:border dark:border-cyan-100`}
        >
          {
            Object
              .values(DARK_MODE_OPTIONS)
              .map((item) => {
                const { text, icon: Icon, key } = item;

                return (
                  <li key={key}>
                    <button
                      onClick={() => {
                        setIsDropdownActive(!isDropdownActive);
                        store.darkMode.value = item;
                      }}
                      className="flex items-center gap-2 w-full px-3 py-1.5 border-zinc-200 hover:bg-zinc-100 dark:hover:text-black dark:hover:border-cyan-50"
                      type="button"
                    >
                      <Icon className={iconsDarkModeClass} />
                      <span className="text-left text-sm font-semibold tracking-wide">{text}</span>
                    </button>
                  </li>
                )
              })
          }
        </ul>
      </div>
    </header>
  );
}
