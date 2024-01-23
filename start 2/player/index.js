import { subscribe } from "./data/data.js";
import { renderHeader } from "./components/header/renderPlaylistHeader.js";
import { renderPlaylists } from "./components/playlists/renderplaylists.js";
import { getPlaylists } from "./data/data.js";
import { renderPlaylistsPanels } from "./components/playlists-panels/renderPlaylistsPanels.js";
import { addPlaylist } from "./components/add-playlist/renderAddPlaylist.js";

const rootElement = document.querySelector('#root');

function renderApp() {
    rootElement.innerHTML = '';

    const header = renderHeader();
    rootElement.appendChild(header);

    const myPlaylists = addPlaylist();
    rootElement.appendChild(myPlaylists);

    const panels = renderPlaylistsPanels();
    rootElement.appendChild(panels);

    const playlistsArray = getPlaylists()

    const playlists = renderPlaylists(playlistsArray);
    rootElement.appendChild(playlists);
};

renderApp()
    
subscribe(renderApp);