export function renderTrack(tracksArray) {

    const trackContainer = document.createElement('div');
    trackContainer.classList.add('trackContainer');

    const imagesTracksContainer = document.createElement('div');
    imagesTracksContainer.classList.add('imagesTracksContainer');

    const buttonTrackImage = document.createElement('img');
    buttonTrackImage.src = tracksArray.buttonImage;
    buttonTrackImage.classList.add('buttonTrackImage');
    imagesTracksContainer.appendChild(buttonTrackImage);

    const coverTrackImage = document.createElement('img');
    coverTrackImage.src = tracksArray.coverImageUrl;
    coverTrackImage.classList.add('coverTrackImage');
    imagesTracksContainer.appendChild(coverTrackImage);

    trackContainer.appendChild(imagesTracksContainer);

    const commoNameOfTrackContainer = document.createElement('div');
    commoNameOfTrackContainer.classList.add('commoNameOfTrackContainer');
    
    const nameOfTrackContainer = document.createElement('div');
    nameOfTrackContainer.classList.add('nameOfTrackContainer');

    if (tracksArray.inTrend) {
        const inTrendImage = document.createElement('img');
        inTrendImage.src = '/src/img/fire.png';
        inTrendImage.classList.add('inTrendImage');
        nameOfTrackContainer.appendChild(inTrendImage);
    }

    const trackElement = document.createElement('p');
    trackElement.classList.add('trackElement');
    trackElement.innerHTML = tracksArray.artistName + ' - ' + tracksArray.title;
    nameOfTrackContainer.appendChild(trackElement);
    commoNameOfTrackContainer.appendChild(nameOfTrackContainer)

    const audioElement = document.createElement('audio');
    audioElement.classList.add('audioElement')
    audioElement.src = tracksArray.fileUrl;
    audioElement.controls = true;
    commoNameOfTrackContainer.appendChild(audioElement);
    
    trackContainer.appendChild(commoNameOfTrackContainer);

    return trackContainer;
}

