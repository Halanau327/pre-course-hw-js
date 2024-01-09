import { setSortDirection, getSortDirection } from "../../data.js";

export function renderSortButtons() {
    const sortButtonsContainer = document.createElement('div');

    const ascSortButton = document.createElement("button");
    ascSortButton.innerText = '⬆️';
    ascSortButton.addEventListener('click', () => {
        setSortDirection('asc');
        //setSearchTerm(searchInput.value);
    });
  
    const descSortButton = document.createElement("button");
    descSortButton.innerText = '⬇️';
    descSortButton.addEventListener('click', () => {
        setSortDirection('desc');
        //setSearchTerm(searchInput.value);
    });
  
    sortButtonsContainer.appendChild(ascSortButton);
    sortButtonsContainer.appendChild(descSortButton);

    if (getSortDirection() === 'asc') {
        ascSortButton.style.backgroundColor = 'green';
    } else if (getSortDirection() === 'desc') {
        descSortButton.style.backgroundColor = 'green';
    }


    return sortButtonsContainer;
}