export function renderInputSearch() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');

    const spanInputContainer = document.createElement('div');
    spanInputContainer.classList.add('spanInputContainer');

    const searchIcon = document.createElement('span');
    searchIcon.classList.add('searchIcon');
    spanInputContainer.appendChild(searchIcon);

    inputContainer.appendChild(spanInputContainer);

    const inputSearch = document.createElement('input');
    inputSearch.classList.add('inputSearch');
    inputSearch.placeholder = 'Input search';
    inputContainer.appendChild(inputSearch);

    return inputContainer;
}