import { renderInputSearch } from "./input-search/renderInputSearch.js";
import { renderSelect } from "./select-box/renderSelectBox.js";
import { renderSelectSort } from "./select-sort/renderSelectSort.js";
import { renderViewPanels } from "./view-panels/renderViewPanels.js";



export function renderPlaylistsPanels() {
    const playlistsPanels = document.createElement('div');
    playlistsPanels.classList.add('playlistsPanels');

    const playlistsContainer = document.createElement('div');
    playlistsContainer.classList.add('playlistsContainer');

    const search = renderInputSearch();
    playlistsContainer.appendChild(search);

    const selectBox = renderSelect;
    playlistsContainer.appendChild(selectBox);

    const selectSort = renderSelectSort();
    playlistsContainer.appendChild(selectSort);

    const viewPanels = renderViewPanels();
    playlistsContainer.appendChild(viewPanels);

    playlistsPanels.appendChild(playlistsContainer);

    return playlistsPanels;
}