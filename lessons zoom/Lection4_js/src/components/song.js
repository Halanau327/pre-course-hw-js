export function renderSong(song) {
    const songContainer = document.createElement('div');
    songContainer.innerHTML = '▶ ' + song.artist + ' ' + song.title + ' / ' + song.year;

    songContainer.appendChild(document.createElement('br'));
   
    return songContainer;
}