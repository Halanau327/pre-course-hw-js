
export function renderPlaylists() {
    const coverContainer = document.createElement('div');
    coverContainer.classList.add('coverContainer');

    const coverWrapper = document.createElement('div');
    coverWrapper.classList.add('coverWrapper');


    coverContainer.appendChild(coverWrapper);
    return coverContainer;
}