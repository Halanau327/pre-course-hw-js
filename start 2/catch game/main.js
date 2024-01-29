import { Game } from './ui/game.component.js'
import { subscribe } from './data/game.data.js'
import { Player } from './sound/player.js'

Player();

subscribe(renderApp);

const rootElement = document.querySelector('#root');

function renderApp() {
    rootElement.innerHTML = '';

    const gameEl = Game();
    rootElement.appendChild(gameEl);
}

renderApp();

