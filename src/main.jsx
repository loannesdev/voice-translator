import { render } from "preact";
import "./index.css";
import App from "./pages/App";
import { initializeDarkTheme } from "./utils/functions";

initializeDarkTheme();

render(<App />, document.getElementById("app"));
