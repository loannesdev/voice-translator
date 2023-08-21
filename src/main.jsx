import { render } from "preact";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

render(
  <>
    <Toaster />
    <App />
  </>,
  document.getElementById("app")
);
