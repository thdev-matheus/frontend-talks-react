import ReactDOM from "react-dom/client";
import { App } from "./app";
import { Contexts } from "./contexts";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Contexts>
    <GlobalStyle />
    <App />
  </Contexts>
);
