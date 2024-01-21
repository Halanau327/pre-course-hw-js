export function renderTrack(tracksArray) {

    const trackContainer = document.createElement('div');
    trackContainer.classList.add('trackContainer');

    const buttonTrackImage = document.createElement('img');
    buttonTrackImage.src = tracksArray.buttonImage;
    buttonTrackImage.classList.add('buttonTrackImage');
    trackContainer.appendChild(buttonTrackImage);

    const coverTrackImage = document.createElement('img');
    coverTrackImage.src = tracksArray.coverImageUrl;
    coverTrackImage.classList.add('coverTrackImage');
    trackContainer.appendChild(coverTrackImage);

    if (tracksArray.inTrend) {
        const inTrendImage = document.createElement('img');
        inTrendImage.src = '/src/img/fire.png';
        inTrendImage.classList.add('inTrendImage');
        trackContainer.appendChild(inTrendImage);
    }

    const trackElement = document.createElement('p');
    trackElement.classList.add('trackElement');
    trackElement.innerHTML = tracksArray.artistName + ' - ' + tracksArray.title;
    trackContainer.appendChild(trackElement);

    const audioElement = document.createElement('audio');
    audioElement.src = tracksArray.fileUrl;
    audioElement.controls = true;
    trackContainer.appendChild(audioElement);

    return trackContainer;
}

