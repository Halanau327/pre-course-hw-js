import { renderPlaylist } from "./components/playlist/renderPlaylist.js";


const rootElement = document.querySelector('#root');

function renderApp() {

const renderPlst = renderPlaylist();
rootElement.appendChild(renderPlst);
};

renderApp()

subscribe(renderApp);