import { subscribe } from "./data/data.js";
import { renderHeader } from "./components/header/header.js";

const rootElement = document.querySelector('#root');

function renderApp() {
    rootElement.innerHTML = '';
    const header = renderHeader();
    rootElement.appendChild(header);
}

renderApp()

subscribe(renderApp);