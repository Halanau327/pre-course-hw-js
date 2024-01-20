import { renderPlaylistHeader } from "./header/renderHeader.js";
import { renderTrack } from "./track/renderTrack.js";
import { getPlaylist1 } from "../../data.js/data.js";
import { getPlaylist2 } from "../../data.js/data.js";


export function renderPlaylist() {
    const playlistContainer = document.createElement('div');
    playlistContainer.classList.add('playlistContainer');

    const playlistTracks1 = getPlaylist1();
    const playlistTracks2 = getPlaylist2();

    const commonHeaderContainer = document.createElement('div');
    commonHeaderContainer .classList.add('commonHeader');
    
    const header1 = renderPlaylistHeader(playlistTracks1);
    commonHeaderContainer .appendChild(header1);

    const header2 = renderPlaylistHeader(playlistTracks2);
    commonHeaderContainer .appendChild(header2);

    playlistContainer.appendChild(commonHeaderContainer);


    const commonPlaylistContainer = document.createElement('div');
    commonPlaylistContainer.classList.add('commonPlaylistContainer');

    const renderTracksPlaylist1 = renderTrack(playlistTracks1);
    commonPlaylistContainer.appendChild(renderTracksPlaylist1);

    const renderTracksPlaylist2 = renderTrack(playlistTracks2);
    commonPlaylistContainer.appendChild(renderTracksPlaylist2);
    playlistContainer.appendChild(commonPlaylistContainer);
    
    return playlistContainer;
}