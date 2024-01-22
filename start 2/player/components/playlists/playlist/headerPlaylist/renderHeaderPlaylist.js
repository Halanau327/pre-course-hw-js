export function renderHeaderPlaylist(headerPlaylistArray) {
    const headerPlaylistContainer = document.createElement('div');
    headerPlaylistContainer.classList.add('headerPlaylistContainer');

    const headerPlaylistLeftContainer = document.createElement('div');
    headerPlaylistLeftContainer.classList.add('headerPlaylistLeftContainer');

    const headerPlaylistCoverImage = document.createElement('img');
    headerPlaylistCoverImage.classList.add('headerPlaylistCoverImage');
    headerPlaylistCoverImage.src = headerPlaylistArray.coverImageUrl;
    headerPlaylistContainer.appendChild(headerPlaylistCoverImage);

    const headerPlaylistInfoName = document.createElement('p');
    headerPlaylistInfoName.classList.add('headerPlaylistInfoName');
    headerPlaylistInfoName.textContent = headerPlaylistArray.info.infoName;
    headerPlaylistLeftContainer.appendChild(headerPlaylistInfoName);

    const headerPlaylistTitle = document.createElement('h2');
    headerPlaylistTitle.classList.add('headerPlaylistTitle');
    headerPlaylistTitle.textContent = headerPlaylistArray.info.title;
    headerPlaylistLeftContainer.appendChild(headerPlaylistTitle);

    let totalDurationInSeconds = headerPlaylistArray.info.totalTracksDurationInSeconds;
    let totalDurationInMinutes = Math.round(totalDurationInSeconds / 60);
    let remainingSeconds = totalDurationInSeconds % 60;

    const headerPlaylistCount = document.createElement('p');
    headerPlaylistCount.classList.add('headerPlaylistCount');
    headerPlaylistCount.textContent = headerPlaylistArray.info.totalTracksCount + ' ' + 'tracks' + ' , ' + totalDurationInMinutes + ' m ' + remainingSeconds + ' s ';
    headerPlaylistLeftContainer.appendChild(headerPlaylistCount);

    const headerPlaylistArtists = document.createElement('p');
    headerPlaylistArtists.classList.add('headerPlaylistArtists');
    headerPlaylistArtists.textContent = headerPlaylistArray.info.artistsOfPlaylist;
    headerPlaylistLeftContainer.appendChild(headerPlaylistArtists);

    headerPlaylistContainer.appendChild(headerPlaylistLeftContainer);

    return headerPlaylistContainer;

}