

export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    caught: 'caught',
}


export const data = {
    settings: {
        rowsCount: 5,
        columnsCount: 5,
        maximumMisses: 3,
        decreaseDeltaInMs: 100,
        isMuted: false,
    },
    rowsCount: 3,
    columnsCount: 3,
    status: OFFER_STATUSES.default,
    coords: {
        current: {
            x: 1,
            y: 2,
        },
        previous: {
            x: 0,
            y: 2,
        },
    },
    score: {
        missCount: 3,
        caughtCount: 2,
    }
}

let subscriber = function () {

}

export function subscribe(newSubscriber) {
    subscriber = newSubscriber;
}

setInterval(() => {
    moveOfferToRandomPosition();
}, 1000);


function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;

    do {
        newX = getRandom(data.settings.columnsCount - 1);
        newY = getRandom(data.settings.rowsCount - 1);
    } while (data.coords.current.x === newX && data.coords.current.y === newY);

    miss();

    data.coords.current.x = newX;
    data.coords.current.y = newY;

    subscriber();
}

function miss() {
    data.status = OFFER_STATUSES.missed;
    data.score.missCount++

    data.coords.previous = {
        ...data.coords.current
    };


    setTimeout(() => {
        data.status = OFFER_STATUSES.default;
        subscriber();
    }, 200);
}


function getRandom(N) {
    return Math.floor(Math.random() * (N + 1));
}