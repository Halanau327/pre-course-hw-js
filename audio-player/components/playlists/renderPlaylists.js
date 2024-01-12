export function renderPlaylistCover(playlistCover) {
    const coverContainer = document.createElement('div');
    coverContainer.classList.add('coverContainer');

    const coverWrapper = document.createElement('div');
    coverWrapper.classList.add('coverWrapper');

    for (const cover in playlistCover) {
        if (playlistCover.hasOwnProperty(cover)) {
            const coverElements = playlistCover[cover];

            for (coverElement of coverElements) {
               const coverElementContainer = document.createElement('div');

               const coverImage = document.createElement('img');
               coverImage.classList.add
            }
        }   
    }
}