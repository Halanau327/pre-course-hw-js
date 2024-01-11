export function renderInputSearch() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');

    const inputSearch = document.createElement('input');
    inputSearch.classList.add('inputSearch');
    inputSearch.placeholder = 'Input search';
    inputContainer.appendChild(inputSearch);

    return inputContainer;
}