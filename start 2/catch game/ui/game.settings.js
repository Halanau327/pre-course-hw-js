import { setGridElement } from "./game/settings/set.grid.component.js";

export function Settings() {
    const containerSettingsElement = document.createElement('div');
    
    const gridElement = setGridElement();
    containerSettingsElement.appendChild(gridElement);
    
    return containerSettingsElement;
}