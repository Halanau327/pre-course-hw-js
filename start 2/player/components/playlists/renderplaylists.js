import { renderPlaylist } from "./playlist/renderPlaylist.js";

export function renderPlaylists(playlistsArray) {
    const playlistsContainer = document.createElement('div');
    playlistsContainer.classList.add('playlistsContainer');

    for (let i = 0; i < playlistsArray.length; i++) {
        const allPlaylists = renderPlaylist(playlistsArray[i]);
        playlistsContainer.appendChild(allPlaylists);
    }
    return playlistsContainer;
}