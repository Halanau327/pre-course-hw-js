import { subscribe } from "./data/data.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { addPlaylist } from "./components/add-playlist/renderAddPlaylist.js";
import { renderPlaylistsPanels } from "./components/playlists-panels/renderPlaylistsPanels.js";
import { renderLeftPart } from "./components/playlists/left-part/renderLeftPart.js";
import { renderRightPart } from "./components/playlists/right-part/renderRightPart.js";
import { getFilteredLeftPart } from "./data/data.js";
import { getFilteredRightPart } from "./data/data.js";

const rootElement = document.querySelector('#root');

function renderApp() {

    rootElement.innerHTML = '';

    const header = renderHeader();
    rootElement.appendChild(header);

    const myPlaylists = addPlaylist();
    rootElement.appendChild(myPlaylists);

    const panels = renderPlaylistsPanels();
    rootElement.appendChild(panels);

    /* renderLeftPart*/

    const commonPartContainer = document.createElement('div');
    commonPartContainer.classList.add('commonPart');
    
    const leftPartArray = getFilteredLeftPart();
    const leftPartArrayContainer = document.createElement('div');
    leftPartArrayContainer.classList.add('leftPartArrayContainer');


    for (const leftPartArr of leftPartArray) {
        const renderLeft = renderLeftPart(leftPartArr);
        leftPartArrayContainer.appendChild(renderLeft);
    }
    commonPartContainer.appendChild(leftPartArrayContainer);

    /* renderRightPart*/

    const rightPartArray = getFilteredRightPart();
    const rightPartArrayContainer = document.createElement('div');
    rightPartArrayContainer.classList.add('rightPartArrayContainer');


    for (const rightPartArr of rightPartArray) {
        const renderRight = renderRightPart(rightPartArr);
        rightPartArrayContainer.appendChild(renderRight);
    }

 
    commonPartContainer.appendChild(leftPartArrayContainer);
    commonPartContainer.appendChild(rightPartArrayContainer);

    commonPartContainer.appendChild(rightPartArrayContainer);

    rootElement.appendChild(commonPartContainer);

}

renderApp()

subscribe(renderApp);