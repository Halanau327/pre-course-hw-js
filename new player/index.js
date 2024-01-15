import { subscribe, getLeftPart, getRightPart } from "./data/data.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { addPlaylist } from "./components/add-playlist/renderAddPlaylist.js";
import { renderPlaylistsPanels } from "./components/playlists-panels/renderPlaylistsPanels.js";
import { renderLeftPart } from "./components/playlists/left-part/renderLeftPart.js";

const rootElement = document.querySelector('#root');

function renderApp() {

    rootElement.innerHTML = '';

    const header = renderHeader();
    rootElement.appendChild(header);

    const myPlaylists= addPlaylist();
    rootElement.appendChild(myPlaylists);

    const panels = renderPlaylistsPanels();
    rootElement.appendChild(panels);

/* renderLeftPart start */

    const leftPartArray = getLeftPart();
    const leftPartArrayContainer = document.createElement('div');
    leftPartArrayContainer.classList.add('leftPartArrayContainer');


    for (const leftPartArr of leftPartArray) {
        const renderLeft = renderLeftPart(leftPartArr);
        leftPartArrayContainer.appendChild(renderLeft);
    }
    rootElement.appendChild(leftPartArrayContainer);

/* renderLeftPart end */

    
}

renderApp()

subscribe(renderApp);