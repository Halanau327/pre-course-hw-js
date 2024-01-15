export function addPlaylist() {
    const titleContainer = document.createElement('div');

    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('titleWrapper');

    const playlistTittle = document.createElement('h1');
    playlistTittle.classList.add('playlistTittle');
    playlistTittle.innerText = 'My playlists';
    titleWrapper.appendChild(playlistTittle);

    const playlistButton = document.createElement('button');
    playlistButton.classList.add('playlistButton');
    playlistButton.innerText = 'Add Playlist';
    titleWrapper.appendChild(playlistButton);

    titleContainer.appendChild(titleWrapper);

    return titleContainer;
}