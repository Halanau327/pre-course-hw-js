export function renderSong(songs) {
    const allSongsContainer = document.createElement('div');
    allSongsContainer.classList.add('allSongsContainer');

    Object.values(songs).forEach((songArray) => {
        songArray.forEach((song) => {
            const songItem = document.createElement('div');
            songItem.classList.add('songItem');

            const buttonImage = document.createElement('img');
            buttonImage.classList.add('songButton');
            buttonImage.src = song.buttonImage;
            songItem.appendChild(buttonImage);

            const songName = document.createElement('p');
            songName.classList.add('songName');
            songName.textContent = song.nameOfSong;
            songItem.appendChild(songName);

            allSongsContainer.appendChild(songItem);
        });
    });
    return allSongsContainer;
}
