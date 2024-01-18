import { subscribe } from "./data/data.js";
import { renderHeader } from "./components/header/renderHeader.js";
import { addPlaylist } from "./components/add-playlist/renderAddPlaylist.js";
import { renderPlaylistsPanels } from "./components/playlists-panels/renderPlaylistsPanels.js";
import { renderPlaylist } from "./components/playlists/renderPlaylist.js";
import { getFilteredPlaylist } from "./data/data.js";


const rootElement = document.querySelector('#root');

function renderApp() {

    rootElement.innerHTML = '';

    const header = renderHeader();
    rootElement.appendChild(header);

    const myPlaylists = addPlaylist();
    rootElement.appendChild(myPlaylists);

    const panels = renderPlaylistsPanels();
    rootElement.appendChild(panels);



    // getFilteredLeftPart().forEach(album=> {
    //     const commonPartContainer = document.createElement('div');
    // commonPartContainer.classList.add('commonPart');

    // const leftPartArray = getFilteredLeftPart();

    // const leftPartArrayContainer = document.createElement('div');
    // leftPartArrayContainer.classList.add('leftPartArrayContainer');


    // for (const leftPartArr of leftPartArray) {
    //     const renderLeft = renderLeftPart(leftPartArr);
    //     leftPartArrayContainer.appendChild(renderLeft);
    // }
    // commonPartContainer.appendChild(leftPartArrayContainer);
    // })

    /* renderPlaylist*/

    const commonPartContainer = document.createElement('div');
    commonPartContainer.classList.add('commonPart');

    const playlistArr = getFilteredPlaylist();

    const arrayContainer = document.createElement('div');
    arrayContainer.classList.add('arrayContainer');


    for (const playlist of playlistArr) {
        const renderAllPlaylist = renderPlaylist(playlist);
        arrayContainer.appendChild(renderAllPlaylist);
    }
    commonPartContainer.appendChild(arrayContainer);

    rootElement.appendChild(commonPartContainer);

}

renderApp()

subscribe(renderApp);