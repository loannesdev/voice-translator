import { signal } from "@preact/signals";

const store = {
  option: signal("text"),
  firstText: signal(""),
  secondText: signal(""),
  isHearing: signal(false),
  darkMode: signal(null)
};

export default store;
