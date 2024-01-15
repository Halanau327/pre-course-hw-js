export function renderSong(songs) {
    const allSongsContainer = document.createElement('div');
    allSongsContainer.classList.add('allSongsContainer');

    Object.values(songs).forEach((songArray) => {
        songArray.forEach((song) => {
            const songItem = document.createElement('div');
            songItem.classList.add('songItem');

            const audioPlayerContainer = document.createElement('div');
            audioPlayerContainer.classList.add('audioPlayerContainer');

            const buttonImage = document.createElement('img');
            buttonImage.classList.add('songButton');
            buttonImage.src = song.buttonImage;
            songItem.appendChild(buttonImage);

            if (song.isHit) {
                const songIsHit = document.createElement('img');
                songIsHit.classList.add('songIsHit');
                songIsHit.src = song.isHit;
                songItem.appendChild(songIsHit);
            }

            const songImage = document.createElement('img');
            songImage.classList.add('songImage');
            songImage.src = song.imageOfSong;
            songItem.appendChild(songImage);

            const songName = document.createElement('p');
            songName.classList.add('songName');
            songName.textContent = song.nameOfSong;
            songItem.appendChild(songName);

            const buttonPlay = document.createElement('img');
            buttonPlay.classList.add('buttonPlay');
            buttonPlay.src = song.buttonPlay;
            audioPlayerContainer.appendChild(buttonPlay);

            const songTime = document.createElement('p');
            songTime.classList.add('songTime');
            songTime.textContent = song.time;
            audioPlayerContainer.appendChild(songTime);


            const songTimeLine = document.createElement('img');
            songTimeLine.classList.add('songTimeLine');
            songTimeLine.src = song.line;
            audioPlayerContainer.appendChild(songTimeLine);

            const songVolume = document.createElement('img');
            songVolume.classList.add('songVolume');
            songVolume.src = song.volume;
            audioPlayerContainer.appendChild(songVolume);

            const buttonProperty = document.createElement('img');
            buttonProperty.classList.add('songVolume');
            buttonProperty.src = song.buttonProperty;
            audioPlayerContainer.appendChild(buttonProperty);

            songItem.appendChild(audioPlayerContainer);
            allSongsContainer.appendChild(songItem);
        });
    });
    return allSongsContainer;
}
