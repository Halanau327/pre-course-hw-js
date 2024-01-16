export function renderRightPart(rightPartArray) {

    const rightPartContainer = document.createElement('div');
    rightPartContainer.classList.add('rightPartContainer');

    const coverContainer = document.createElement('div');
    coverContainer.classList.add('coverContainer');

    const coverTextContainer = document.createElement('div');
    coverTextContainer.classList.add('coverTextContainer');

    const songsContainer = document.createElement('div');
    songsContainer.classList.add('songsContainer');


    const coverImage = document.createElement('img');
    coverImage.classList.add('coverImage');
    coverImage.src = rightPartArray.playlistCover.image;
    coverContainer.appendChild(coverImage);

    const coverType = document.createElement('p');
    coverType.classList.add('coverType');
    coverType.innerText = rightPartArray.playlistCover.type;
    coverTextContainer.appendChild(coverType);

    const coverTitle = document.createElement('p');
    coverTitle.classList.add('coverTitle');
    coverTitle.innerText = rightPartArray.playlistCover.title;
    coverTextContainer.appendChild(coverTitle);

    const coverContent = document.createElement('p');
    coverContent.classList.add('coverContent');
    coverContent.innerText = rightPartArray.playlistCover.content;
    coverTextContainer.appendChild(coverContent);

    const coverSinger = document.createElement('p');
    coverSinger.classList.add('coverSinger');
    coverSinger.innerText = rightPartArray.playlistCover.singer;
    coverTextContainer.appendChild(coverSinger);

    coverContainer.appendChild(coverTextContainer);


    for (const song of rightPartArray.songs) {

        const firstContainer = document.createElement('div')
        firstContainer.classList.add('firstContainer')

        const secondContainer = document.createElement('div');
        secondContainer.classList.add('secondContainer');

        const songButtonImage = document.createElement('img');
        songButtonImage.classList.add('songButtonImage');
        songButtonImage.src = song.buttonImage;
        secondContainer.appendChild(songButtonImage);

        const imageOfSong = document.createElement('img');
        imageOfSong.classList.add('imageOfSong');
        imageOfSong.src = song.imageOfSong;
        secondContainer.appendChild(imageOfSong);

        firstContainer.appendChild(secondContainer);

        const thirdContainer = document.createElement('div');
        thirdContainer.classList.add('thirdContainer');

        const fourthContainer = document.createElement('div');
        fourthContainer.classList.add('fourthContainer');

        if (song.isHit) {
            const isHit = document.createElement('img');
            isHit.classList.add('isHit');
            isHit.src = song.isHit;
            fourthContainer.appendChild(isHit);
        }

        const nameOfSong = document.createElement('p');
        nameOfSong.classList.add('nameOfSong');
        nameOfSong.innerText = song.nameOfSong
        fourthContainer.appendChild(nameOfSong);

        const fifthContainer = document.createElement('div');
        fifthContainer.classList.add('fifthContainer');

        const buttonPlay = document.createElement('img');
        buttonPlay.classList.add('buttonPlay');
        buttonPlay.src = song.buttonPlay;
        fifthContainer.appendChild(buttonPlay); 
        
        const time = document.createElement('p');
        time.classList.add('time');
        time.innerText = song.time
        fifthContainer.appendChild(time);

        const lineDiv = document.createElement('div');
        lineDiv.classList.add('lineDiv');

        const line = document.createElement('img');
        line.classList.add('line');

        line.src = song.line;
        lineDiv.appendChild(line); 

        fifthContainer.appendChild(lineDiv);

        const volume = document.createElement('img');
        volume.classList.add('volume');
        volume.src = song.volume;
        fifthContainer.appendChild(volume); 

        const buttonProperty = document.createElement('img');
        buttonProperty.classList.add('buttonProperty');
        buttonProperty.src = song.buttonProperty;
        fifthContainer.appendChild(buttonProperty); 
       
        thirdContainer.appendChild(fourthContainer);
        thirdContainer.appendChild(fifthContainer);

        firstContainer.appendChild(thirdContainer);

        songsContainer.appendChild(firstContainer);

    };

    rightPartContainer.appendChild(coverContainer);
    rightPartContainer.appendChild(songsContainer);

    return rightPartContainer;
}
