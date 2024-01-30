import { settingsData } from "../data/settings.data.js";

export function setGridElement() {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    const paragraphGridElement = document.createElement('p');
    paragraphGridElement.classList.add('paragraphGridElement');
    paragraphGridElement.textContent = 'Grid size';
    gridContainer.appendChild(paragraphGridElement);

    const selectGridElement = document.createElement('select');
    selectGridElement.classList.add('selectGridElement');

    const optionGridElement = settingsData.gridSize.map((size, index) => {
        const optionElement = document.createElement('option');
        optionElement.innerHTML = `${size.width} * ${size.height}`;
        optionElement.value = index;
        return optionElement;
    });

    selectGridElement.addEventListener('change', (element) => {
        let selectedIndex = element.currentTarget.value;
        const size = settingsData.gridSize[selectedIndex];
    });

    selectGridElement.appendChild(...optionGridElement);
    gridContainer.appendChild(selectGridElement);


    return gridContainer;
}