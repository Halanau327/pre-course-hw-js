import { subscribe, getPlaylistsData, getSongsData } from "./data/data.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { addPlaylist } from "./components/add-playlist/renderAddPlaylist.js";
import { renderPlaylistsPanels } from "./components/playlists-panels/renderPlaylistsPanels.js";
import { renderPlaylistCover } from "./components/playlists/playlist-cover/renderPlaylistCover.js";

const rootElement = document.querySelector('#root');

function renderApp() {

    rootElement.innerHTML = '';

    const header = renderHeader();
    rootElement.appendChild(header);

    const myPlaylists= addPlaylist();
    rootElement.appendChild(myPlaylists);

    const panels = renderPlaylistsPanels();
    rootElement.appendChild(panels);

    const playlists = getPlaylistsData();
    const playlistContainer = document.createElement('div');
    playlistContainer.classList.add('playlistContainer');

    for (const playlist of playlists) {
        const playlistCover = renderPlaylistCover(playlist);
        playlistContainer.appendChild(playlistCover);
    }
    rootElement.appendChild(playlistContainer);
}

renderApp()

subscribe(renderApp);