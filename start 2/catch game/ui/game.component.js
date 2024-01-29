import {Settings} from './game.settings.js'
import {Scores} from './game/scores/scores.component.js'
import {Grid} from './game/grid/grid.component.js'

export function Game() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('containerGameElement')

    const settingsElement = Settings(); 
    containerElement.appendChild(settingsElement);

    const scoresElement = Scores();
    containerElement.appendChild(scoresElement);
    
    const gridElement = Grid();
    containerElement.appendChild(gridElement);

    return containerElement;
}