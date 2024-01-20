export function renderTrack(inputTrackForRendering) {

    const trackContainer = document.createElement('div');
    trackContainer.classList.add('playlistContainer');

    for (let i = 0; i < inputTrackForRendering.tracks.length; i++) {

        const track1Element = document.createElement('div');
        track1Element.classList.add('track1Element');
        track1Element.innerHTML = inputTrackForRendering.tracks[i].artistName + ' - ' + inputTrackForRendering.tracks[i].title;
        trackContainer.appendChild(track1Element);

        const playerElement = document.createElement('audio');
        playerElement.src = inputTrackForRendering.tracks[i].fileUrl;
        playerElement.controls = true;
        trackContainer.appendChild(playerElement);
    }

    return trackContainer;
}