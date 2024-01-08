let songs = [
    {
        year: 2020,
        artist: "Elvira T",
        title: "Море",
        url: '../Elvira T - Море.mp3'
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

let searchTerm = '';

let subscriber = null;

// publisher-subscriber
export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

// getter
export function getSongs() {
    const filteredSongs = songs.filter(s => s.title.toLowerCase().indexOf(searchTerm) > -1 
    || s.artist.toLowerCase().indexOf(searchTerm) > -1);

    return filteredSongs;
}

// setter
export function setSearchTerm(newSearchTerm) {
    searchTerm = newSearchTerm.toLowerCase();
    subscriber();
}

export function getSearchTerm() {
    return searchTerm;
}