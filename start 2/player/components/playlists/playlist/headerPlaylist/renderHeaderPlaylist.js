export function renderHeaderPlaylist(headerPlaylistArray) {
    const headerPlaylistContainer = document.createElement('div');
    headerPlaylistContainer.classList.add('headerPlaylistContainer');

    const headerPlaylistTitle = document.createElement('h2');
    headerPlaylistTitle.classList.add('headerPlaylistTitle');
    headerPlaylistTitle.textContent = headerPlaylistArray.title;
    headerPlaylistContainer.appendChild(headerPlaylistTitle);

    const headerPlaylistCoverImage = document.createElement('img');
    headerPlaylistCoverImage.classList.add('headerPlaylistCoverImage');
    headerPlaylistCoverImage.src = headerPlaylistArray.coverImageUrl;
    headerPlaylistContainer.appendChild(headerPlaylistCoverImage);

    return headerPlaylistContainer;

}