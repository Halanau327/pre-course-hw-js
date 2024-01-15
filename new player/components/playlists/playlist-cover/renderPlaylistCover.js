export function renderPlaylistCover(playlistCover) {
    
    const coverContainer = document.createElement('div');
    coverContainer.classList.add('coverContainer');

    const coverWrapper = document.createElement('div');
    coverWrapper.classList.add('coverWrapper');

    const coverImage = document.createElement('img');
    coverImage.src = playlistCover.image;
    coverImage.classList.add('coverImage');
    coverContainer.appendChild(coverImage);

    const coverType = document.createElement('p');
    coverType.classList.add('coverType');
    coverType.innerText = playlistCover.type;
    coverWrapper.appendChild(coverType);

    const coverTitle = document.createElement('p');
    coverTitle.classList.add('coverTitle');
    coverTitle.innerText = playlistCover.title;
    coverWrapper.appendChild(coverTitle);

    const coverContent = document.createElement('p');
    coverContent.classList.add('coverContent');
    coverContent.innerText = playlistCover.content;
    coverWrapper.appendChild(coverContent);

    const coverSinger = document.createElement('p');
    coverSinger.classList.add('coverSinger');
    coverSinger.innerText = playlistCover.singer;
    coverWrapper.appendChild(coverSinger);

    coverContainer.appendChild(coverWrapper);


    return coverContainer;
}