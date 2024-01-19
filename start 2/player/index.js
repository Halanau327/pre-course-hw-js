import { renderPlaylist } from "./playlist/renderPlaylist.js";
import { getPlaylist } from "./data.js/data.js";

const rootElement = document.querySelector('#root');

function renderApp() {

    const playlistArray = getPlaylist();

    const renderplst = renderPlaylist(playlistArray);

    rootElement.appendChild(renderplst);

};

renderApp()

subscribe(renderApp);