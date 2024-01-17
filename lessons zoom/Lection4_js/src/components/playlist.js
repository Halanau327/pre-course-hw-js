import { renderSong } from "./song.js";
import { getSongs } from "../data.js";

export function renderPlaylist() {
    const songs = getSongs();

    const songsContainer = document.createElement('div');

    for(let i=0; i < songs.length; i++) {
        const songElement = renderSong(songs[i]);
        songsContainer.appendChild(songElement);
    }
    
    return songsContainer;
}