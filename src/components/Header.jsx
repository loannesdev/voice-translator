import { useState } from "preact/hooks";
import store from "../store";
import { DARK_MODE_OPTIONS } from "../utils/constans";

export default function Header() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

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
          {store.darkMode.value?.icon}
        </button>

        <ul
          id="dropdown"
          class={`${isDropdownActive ? "" : "hidden "}text-sm rounded shadow w-min fixed top-14 right-0 bg-white dark:bg-[#0f1a2f] dark:shadow dark:border dark:border-cyan-100`}
        >
          {
            Object
              .entries(DARK_MODE_OPTIONS)
              .map(([_, item]) => {
                const { text, icon, key } = item;

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
                      {icon} <span className="text-left text-sm font-semibold tracking-wide">{text}</span>
                    </button>
                  </li>
                );
              })
          }
        </ul>
      </div>
    </header>
  );
}
