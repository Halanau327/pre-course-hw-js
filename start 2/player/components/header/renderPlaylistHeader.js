export function renderHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');

    const headerContainerElement = document.createElement('div');
    headerContainerElement.classList.add('headerContainerElement');

    const playlistImg = document.createElement('img');
    playlistImg.classList.add('playlistImg');
    playlistImg.src = '/src/svg/playlist-img.svg';
    playlistImg.alt = 'playlistImg';
    playlistImg.innerText = 'InPlaylist';
    headerContainerElement.appendChild(playlistImg);

    const headerTitle = document.createElement('h3');
    headerTitle.classList.add('headerTitle');
    headerTitle.innerText = 'InPlaylist';
    headerContainerElement.appendChild(headerTitle);

    headerContainer.appendChild(headerContainerElement);

    return headerContainer;
}