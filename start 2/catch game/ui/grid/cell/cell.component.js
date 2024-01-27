import { OFFER_STATUSES, data, catchOffer } from "../../../data/game.data.js";

export function Cell(x, y) {
    const cellEl = document.createElement('td');

    if (x === data.coords.current.x && y === data.coords.current.y) {
        const offerEl = document.createElement('img');
        offerEl.addEventListener('click', catchOffer);
        offerEl.src = '/assets/images/offer.png';
        cellEl.append(offerEl);
    }

    if (data.status === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement('img');
        offerEl.src = '/assets/images/caught-offer.png';
        cellEl.append(offerEl);
    }

    if (data.status === OFFER_STATUSES.missed && x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement('img');
        offerEl.src = '/assets/images/missed-offer.png';
        cellEl.append(offerEl);
    }

    return cellEl;
}