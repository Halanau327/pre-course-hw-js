import { renderHeaderPlaylist } from "./headerPlaylist/renderHeaderPlaylist.js";
import { renderTrack } from "./track/renderTrack.js";

export function renderPlaylist(playlistArray) {
    const plstContainer = document.createElement('div');
    plstContainer.classList.add('plstContainer');

    const headerPlaylist = renderHeaderPlaylist(playlistArray);
    plstContainer.appendChild(headerPlaylist);

    for (let i = 0; i < playlistArray.tracks.length; i++) {

        const trackPlaylist = renderTrack(playlistArray.tracks[i]);
        plstContainer.appendChild(trackPlaylist);
    }

    return plstContainer;
}