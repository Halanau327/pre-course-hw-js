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
    status: OFFER_STATUSES.caught,
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

let subscribers = [];

function notify() {
    subscribers.forEach(subscriber => subscriber())
}

export function subscribe(newSubscriber) {
    subscribers.push(newSubscriber);
}

let stepIntervalId;

function runStepInterval() {
    stepIntervalId = setInterval(() => {
        missOffer()
        moveOfferToRandomPosition(true);
        notify();
    }, 2000);
}
runStepInterval();

function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;

    do { // выполняется генерация рандомного положения офера, пока координаты рандома не будут равны координатам newX и newY
        newX = getRandom(data.settings.columnsCount - 1); // любой рандом из существующих по дефолту (settings.columnsCount) ячеек оси Х
        newY = getRandom(data.settings.rowsCount - 1);
    } while (data.coords.current.x === newX && data.coords.current.y === newY);

    data.coords.current.x = newX; //обновляет текущие координаты офера на новые случайные значения, не совпадающие с текущими координатами
    data.coords.current.y = newY;
};

function missOffer() {
    data.status = OFFER_STATUSES.missed;
    data.score.missCount++;

    data.coords.previous = { // предыдущие координаты оффера будут равны координатом offer missed (на предлыдущем месте офера появится оффер миссед)
        ...data.coords.current
    }

    setTimeout(() => {
        data.status = OFFER_STATUSES.default;
        notify();
    }, 200);
}

export function catchOffer() {
    data.status = OFFER_STATUSES.caught;
    data.score.caughtCount++;

    data.coords.previous = { // предыдущие координаты оффера будут равны координатом offer missed (на предлыдущем месте офера появится оффер миссед)
        ...data.coords.current
    }
    setTimeout(() => {
        data.status = OFFER_STATUSES.default;
        notify();
    }, 200);

    moveOfferToRandomPosition();
    notify();
    clearInterval(stepIntervalId);
    runStepInterval();
}

function getRandom(N) {
    return Math.floor(Math.random() * (N + 1));
}