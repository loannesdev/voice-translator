import store from "../store";
import { DARK_MODE_OPTIONS } from "./constants";

const systemTheme = () => {
  if (DARK_MODE_OPTIONS.system.key === store.darkMode.value?.key) {
    const matches = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.setAttribute("data-theme", matches ? "dark" : "light");
    localStorage.setItem("theme", "system");
    store.darkMode.value = DARK_MODE_OPTIONS.system;
  }
};

export const initializeDarkTheme = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      systemTheme();
    });

  const theme = localStorage.getItem("theme");

  if (theme) {
    if (theme === "system") {
      systemTheme();
      return;
    }

    document.documentElement.setAttribute("data-theme", theme);
    store.darkMode.value = DARK_MODE_OPTIONS[theme];
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    store.darkMode.value = DARK_MODE_OPTIONS.light;
  }

  store.darkMode.subscribe((store) => {
    const [selectedKey] = Object
      .entries(DARK_MODE_OPTIONS)
      .find(([, value]) => value.key === store.key);

    if (store.key === DARK_MODE_OPTIONS.system.key) {
      systemTheme();
      return;
    }

    localStorage.setItem("theme", selectedKey);
    document.documentElement.setAttribute("data-theme", selectedKey);
  });
};
