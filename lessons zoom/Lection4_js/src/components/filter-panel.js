import { setSearchTerm, getSearchTerm } from "../data";

export function renderFilterPanel() {
    const filterPalelElement = document.createElement("div");

    //filterPalelElement.innerHTML = 'filter panel';

    const searchInput = document.createElement("input");
    searchInput.placeholder = 'artist or song name';
    searchInput.value = getSearchTerm();

    const searchButton = document.createElement("button");
    searchButton.innerText = 'Search';
    searchButton.addEventListener('click', () => {
        setSearchTerm(searchInput.value);
    });

    filterPalelElement.appendChild(searchInput);
    filterPalelElement.appendChild(searchButton);



    return filterPalelElement;
}