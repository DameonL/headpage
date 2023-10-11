import { h, render } from "preact";
import Headpage from "./components/Headpage";

function initializeForeground() {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  render(<Headpage />, rootElement);
}

initializeForeground();
