export function renderInputSearch() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');

    const searchIcon = document.createElement('span');
    searchIcon.classList.add('searchIcon');
    inputContainer.appendChild(searchIcon);

    const inputSearch = document.createElement('input');
    inputSearch.classList.add('inputSearch');
    inputSearch.placeholder = 'Input search';
    inputContainer.appendChild(inputSearch);

    return inputContainer;
}