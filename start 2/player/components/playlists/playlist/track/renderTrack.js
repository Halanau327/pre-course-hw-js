export function renderTrack(tracksArray) {

    const trackContainer = document.createElement('div');
    trackContainer.classList.add('trackContainer');

    const buttonTrackImageContainer = document.createElement('div');
    buttonTrackImageContainer.classList.add('buttonTrackImageContainer');

    const imagesTracksContainer = document.createElement('div');
    imagesTracksContainer.classList.add('imagesTracksContainer');

    const buttonTrackImage = document.createElement('img');
    buttonTrackImage.src = tracksArray.buttonImage;
    buttonTrackImage.classList.add('buttonTrackImage');
    buttonTrackImageContainer.appendChild(buttonTrackImage);

    imagesTracksContainer.appendChild(buttonTrackImageContainer);

    const coverTrackImage = document.createElement('img');
    coverTrackImage.src = tracksArray.coverImageUrl;
    coverTrackImage.classList.add('coverTrackImage');
    imagesTracksContainer.appendChild(coverTrackImage);

    trackContainer.appendChild(imagesTracksContainer);

    const commonNameOfTrackContainer = document.createElement('div');
    commonNameOfTrackContainer.classList.add('commonNameOfTrackContainer');

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
    trackElement.innerHTML = tracksArray.artistName + ' - &nbsp;';
    nameOfTrackContainer.appendChild(trackElement);
    commonNameOfTrackContainer.appendChild(nameOfTrackContainer);

    const spanTitleElement = document.createElement('span');
    spanTitleElement.textContent = tracksArray.title;
    spanTitleElement.style.color = '#8A8A8A'; 
    nameOfTrackContainer.appendChild(spanTitleElement);
    
    const audioElement = document.createElement('audio');
    audioElement.classList.add('audioElement')
    audioElement.src = tracksArray.fileUrl;
    audioElement.controls = true;
    commonNameOfTrackContainer.appendChild(audioElement);

    trackContainer.appendChild(commonNameOfTrackContainer);

    return trackContainer;
}

