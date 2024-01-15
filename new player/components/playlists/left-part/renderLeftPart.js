export function renderLeftPart(leftPartArray) {

    const leftPartContainer = document.createElement('div');
    leftPartContainer.classList.add('leftPartContainer');

    const coverContainer = document.createElement('div');
    coverContainer.classList.add('coverContainer');

    const coverTextContainer = document.createElement('div');
    coverTextContainer.classList.add('coverTextContainer');

    const songsContainer = document.createElement('div');
    songsContainer.classList.add('songsContainer');

  


    const coverImage = document.createElement('img');
    coverImage.classList.add('coverImage');
    coverImage.src = leftPartArray.playlistCover.image;
    coverContainer.appendChild(coverImage);

    const coverType = document.createElement('p');
    coverType.classList.add('coverType');
    coverType.innerText = leftPartArray.playlistCover.type;
    coverTextContainer.appendChild(coverType);

    const coverTitle = document.createElement('p');
    coverTitle.classList.add('coverTitle');
    coverTitle.innerText = leftPartArray.playlistCover.title;
    coverTextContainer.appendChild(coverTitle);

    const coverContent = document.createElement('p');
    coverContent.classList.add('coverContent');
    coverContent.innerText = leftPartArray.playlistCover.content;
    coverTextContainer.appendChild(coverContent);

    const coverSinger = document.createElement('p');
    coverSinger.classList.add('coverSinger');
    coverSinger.innerText = leftPartArray.playlistCover.singer;
    coverTextContainer.appendChild(coverSinger);

    coverContainer.appendChild(coverTextContainer);


    for (const song of leftPartArray.songs) {

        const songButtonImage = document.createElement('img');
        songButtonImage.classList.add('songButtonImage');
        songButtonImage.src = song.buttonImage;
        songsContainer.appendChild(songButtonImage);

        if (song.isHit) {
            const isHit = document.createElement('img');
            isHit.classList.add('isHit');
            isHit.src = song.isHit;
            songsContainer.appendChild(isHit);
        }

        const imageOfSong = document.createElement('img');
        imageOfSong.classList.add('imageOfSong');
        imageOfSong.src = song.imageOfSong;
        songsContainer.appendChild(imageOfSong);

        const nameOfSong = document.createElement('p');
        nameOfSong.classList.add('nameOfSong');
        nameOfSong.innerText = song.nameOfSong
        songsContainer.appendChild(nameOfSong);

        const buttonPlay = document.createElement('img');
        buttonPlay.classList.add('buttonPlay');
        buttonPlay.src = song.buttonPlay;
        songsContainer.appendChild(buttonPlay); 
        
        const time = document.createElement('p');
        time.classList.add('time');
        time.innerText = song.time
        songsContainer.appendChild(time);

        const line = document.createElement('img');
        line.classList.add('line');
        line.src = song.line;
        songsContainer.appendChild(line); 

        const volume = document.createElement('img');
        line.classList.add('volume');
        volume.src = song.volume;
        songsContainer.appendChild(volume); 

        const buttonProperty = document.createElement('img');
        buttonProperty.classList.add('buttonProperty');
        buttonProperty.src = song.buttonProperty;
        songsContainer.appendChild(buttonProperty); 
    };

    leftPartContainer.appendChild(coverContainer);
    leftPartContainer.appendChild(songsContainer);

    return leftPartContainer;
}
