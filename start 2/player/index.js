import { renderHeader } from "./components/header/renderPlaylistHeader.js";
import { renderPlaylists } from "./components/playlists/renderplaylists.js";
import { getPlaylists } from "./data.js/data.js";

const rootElement = document.querySelector('#root');

function renderApp() {

    const header = renderHeader();
    rootElement.appendChild(header);

    const playlistsArray = getPlaylists()

    const playlists = renderPlaylists(playlistsArray);
    rootElement.appendChild(playlists);

};

renderApp()

subscribe(renderApp);