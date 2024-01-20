export function renderPlaylistHeader(headerArray) {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');

    const playlistImageElement = document.createElement('img');
    playlistImageElement.classList.add('playlistImageElement');
    playlistImageElement.src = headerArray.coverImageUrl;
    headerContainer.appendChild(playlistImageElement);

    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.classList.add('playlistTitleElement');
    playlistTitleElement.innerText = headerArray.title;
    headerContainer.appendChild(playlistTitleElement);

    return headerContainer;
}