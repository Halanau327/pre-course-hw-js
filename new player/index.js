import { subscribe, getLeftPart, getRightPart } from "./data/data.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { addPlaylist } from "./components/add-playlist/renderAddPlaylist.js";
import { renderPlaylistsPanels } from "./components/playlists-panels/renderPlaylistsPanels.js";
import { renderPlaylistCover } from "./components/playlists/playlist-cover/renderPlaylistCover.js";
import { renderSong } from "./components/playlists/song/renderSong.js";

const rootElement = document.querySelector('#root');

function renderApp() {

    rootElement.innerHTML = '';

    const header = renderHeader();
    rootElement.appendChild(header);

    const myPlaylists= addPlaylist();
    rootElement.appendChild(myPlaylists);

    const panels = renderPlaylistsPanels();
    rootElement.appendChild(panels);

    const playlistsArray = getPlaylistsData();
    const playlistContainer = document.createElement('div');
    playlistContainer.classList.add('playlistContainer');

    for (const playlistElement of playlistsArray) {
        const playlistCover = renderPlaylistCover(playlistElement);
        playlistContainer.appendChild(playlistCover);
    }
    rootElement.appendChild(playlistContainer);

    const songsData1 = getSongsData();
    const songsContainer = renderSong(songsData1);
    rootElement.appendChild(songsContainer);
}

renderApp()

subscribe(renderApp);