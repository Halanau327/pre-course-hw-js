import { setSearchTerm, getSearchTerm } from "../../data.js";

export function renderSearchInput() {
    const searchInput = document.createElement("input");
    searchInput.placeholder = 'artist or song name';
    searchInput.value = getSearchTerm(); // эта функция возвращает текущий поисковый запрос, который будет отображаться в текстовом поле при его создании.
    searchInput.addEventListener('input', () => {
        setSearchTerm(searchInput.value);
    });
    requestAnimationFrame(() => { // для того, чтобы после ввода символа не слетал фокус с инпута
        searchInput.focus();
    }, 0);
    return searchInput;
}