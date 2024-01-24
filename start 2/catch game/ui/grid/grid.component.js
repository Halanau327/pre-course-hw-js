import { data } from "../../data/game.data.js";

export function Grid() {
    const containerElement = document.createElement('table');

    for (let y = 0; y < data.settings.rowsCount.length; y++) {
        const row = document.createElement('tr');

        for (let x = 0; x < data.settings.columnsCount.length; x++) {
            const cell = document.createElement('td');
            cell.append(x + '-' + y);
            row.append(cell);
        }

        containerElement.append(row);

    }


    return containerElement;
}