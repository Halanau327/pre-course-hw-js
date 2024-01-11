export function renderHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');


    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('headerWrapper');

    const playlistImg = document.createElement('img');
    playlistImg.classList.add('playlistImg');
    playlistImg.src = '/audio-player/src/svg/playlist-img.svg';
    playlistImg.alt = 'playlistImg';
    playlistImg.innerText = 'InPlaylist';
    headerWrapper.appendChild(playlistImg);

    const headerTitle = document.createElement('h3');
    headerTitle.classList.add('headerTitle');
    headerTitle.innerText = 'InPlaylist';
    headerWrapper.appendChild(headerTitle);

    headerContainer.appendChild(headerWrapper);

    return headerContainer;
}