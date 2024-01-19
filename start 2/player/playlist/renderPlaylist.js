export function renderPlaylist(playlist) {
    const playlistContainer = document.createElement('div');
    playlistContainer.classList.add('playlistContainer');

    const palylistImageElement = document.createElement('img');
    palylistImageElement.classList.add('coverImage');
    palylistImageElement.src = playlist.coverImageUrl;
    playlistContainer.appendChild(palylistImageElement);

    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.classList.add('playlistTitleElement');
    playlistTitleElement.innerHTML = playlist.title;
    playlistContainer.appendChild(playlistTitleElement);

    const tracksListElement = document.createElement('ul');
    tracksListElement.classList.add('tracksListElement');

    const track1Element = document.createElement('li');
    track1Element.classList.add('track1Element');
    track1Element.innerHTML = playlist.tracks[0].artistName + ' - ' + playlist.tracks[0].title;
    tracksListElement.appendChild(track1Element);

    playlistContainer.appendChild(track1Element);

    const track2Element = document.createElement('li');
    track2Element.classList.add('track2Element');
    track2Element.innerHTML = playlist.tracks[1].artistName + ' - ' + playlist.tracks[1].title;
    tracksListElement.appendChild(track2Element);

    playlistContainer.appendChild(track2Element);

    return playlistContainer;
}