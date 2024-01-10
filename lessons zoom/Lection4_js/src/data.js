let songs = [
    {
        year: 2020,
        artist: "Elvira T",
        title: "Mope",
        url: '../Elvira T - Mope.mp3'
    },
    {
        year: 2019,
        artist: "Lewis Capaldi",
        title: "Someone You Loved"
    },
    {
        year: 2018,
        artist: "Drake",
        title: "God's Plan"
    },
    {
        year: 2017,
        artist: "Ed Sheeran",
        title: "Shape of You"
    },
    {
        year: 2016,
        artist: "Beyoncé",
        title: "Formation"
    }
];

let searchTerm = ''; // переменная, которая хранит поисковый запрос пользователя. searchTerm позволяет нам фильтровать список песен на основе поискового запроса пользователя.

let subscriber = null; // основная цель переменной subscriber в данном коде - установить функцию-подписчик, которая будет вызываться при изменении значения поискового запроса или направления сортировки песен.
let sortDirection = null;

// publisher-subscriber
export function subscribe(subscriberCallback) { // функция subscribe() используется для установки значения переменной subscriber путем передачи функции-подписчика в качестве аргумента.
    subscriber = subscriberCallback;
}

// getter
export function getSongs() {
    const filteredSongs = songs.filter(s => s.title.toLowerCase().indexOf(searchTerm) > -1 // indexOf > -1, позволяет нам при вводе букв найти песни, которые есть в существующем массиве
    || s.artist.toLowerCase().indexOf(searchTerm) > -1);

    return filteredSongs;
}

// setter
export function setSearchTerm(newSearchTerm) { // функция используется для установки значения поискового запроса.
    searchTerm = newSearchTerm.toLowerCase(); 
    subscriber();
}

export function getSearchTerm() { // функция используется для получения текущего значения поискового запроса.
    return searchTerm;
}

/**
 * 
 * @param {'asc' | 'desc'} direction 
 */
export function setSortDirection(direction) {
    sortDirection = direction
    songs.sort((a,b) => {
        if (direction === 'asc') return a.year -b.year;
        return b.year - a.year;
    });
    subscriber();
}

export function getSortDirection() {
    return sortDirection;
}