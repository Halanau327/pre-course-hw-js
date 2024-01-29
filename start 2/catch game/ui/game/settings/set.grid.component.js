import { settingsData } from "../data/settings.data.js";

export function setGridElement() {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    const paragraphGridElement = document.createElement('p');
    paragraphGridElement.classList.add('paragraphGridElement');
    paragraphGridElement.textContent = 'Grid size';
    gridContainer.appendChild(paragraphGridElement);
}