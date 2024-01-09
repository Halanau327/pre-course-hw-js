import { setSearchTerm, getSearchTerm } from "../../data.js";

export function renderSearchInput() {
    const searchInput = document.createElement("input");
    searchInput.placeholder = 'artist or song name';
    searchInput.value = getSearchTerm();
    searchInput.addEventListener('input', () => {
        setSearchTerm(searchInput.value);
    });
    requestAnimationFrame(() => {
        searchInput.focus();
    }, 0);
    return searchInput;
}