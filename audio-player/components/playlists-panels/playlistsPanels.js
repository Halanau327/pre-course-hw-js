import { renderInputSearch } from "./input-search/inputSearch.js";

export function renderPlaylistsPanels() {
    const playlistsPanels = document.createElement('div');
    playlistsPanels.classList.add('playlistsPanels');

    const search = renderInputSearch();
    playlistsPanels.appendChild(search);

    return playlistsPanels;
}