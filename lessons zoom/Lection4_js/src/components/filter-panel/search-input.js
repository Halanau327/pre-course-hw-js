import { setSearchTerm, getSearchTerm } from "../../data.js";

export function renderSearchInput() {
    const searchInput = document.createElement("input");
    searchInput.placeholder = 'artist or song name';
    searchInput.value = getSearchTerm(); // Устанавливаем значение поля ввода равным текущему поисковому запросу, используя функцию getSearchTerm(). Таким образом, если у пользователя уже был введен поисковый запрос, он будет отображаться в поле ввода при создании.
    searchInput.addEventListener('input', () => {
        setSearchTerm(searchInput.value);
    });
    requestAnimationFrame(() => { // для того, чтобы после ввода символа не слетал фокус с инпута
        searchInput.focus();
    }, 0);
    return searchInput;
}