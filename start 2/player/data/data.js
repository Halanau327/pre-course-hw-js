let playlists = [
    {
        coverImageUrl: '/src/img/hip-hop-hits.png',
        info: {
            infoName: 'Playlist',
            title: 'Hip-Hop Hits',
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
            artistsOfPlaylist: 'Eminem, 50cent, Lloyd Banks and others'
        },
        tracks: [
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/eminem.png',
                artistName: 'Eminem',
                title: 'Rap God',
                fileUrl: '/src/songs/hiphop hits/Eminem Rap God.mp3',
                inTrend: true
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/50-cent.png',
                artistName: '50cent',
                title: 'In Da Club',
                fileUrl: '/src/songs/hiphop hits/50 Cent In Da Club.mp3',
                inTrend: false
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/dmx.png',
                artistName: 'DMX',
                title: "X Gon' Give It To Ya",
                fileUrl: "/src/songs/hiphop hits/Dmx X Gon' Give It To Ya.mp3",
                inTrend: true
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/eminem-50cent.png',
                artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                title: "You Don't Know",
                fileUrl: "/src/songs/hiphop hits/Eminem You Don't Know Ft 50 Cent .mp3",
                inTrend: false
            }
        ]
    },
    {
        coverImageUrl: '/src/img/rap-hits-1990.png',
        info: {
            infoName: 'Playlist',
            title: 'Rap Hits 1990s',
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
            artistsOfPlaylist: 'Eminem, 50cent, Lloyd Banks and others'
        },
        tracks: [
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/public-enemy.png',
                artistName: 'Public Enemy',
                title: 'Fight the Power',
                fileUrl: '/src/songs/rap hits/Public Enemy Fight The Power.mp3',
                inTrend: false
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/vanila-ice.png',
                artistName: 'Vanila Ice',
                title: 'Ice Ice Baby',
                fileUrl: '/src/songs/rap hits/Vanilla Ice Ice Ice Baby.mp3',
                inTrend: true
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/mc-hammer.png',
                artistName: 'MC Hammer',
                title: "You Can’t Touch This",
                fileUrl: "/src/songs/rap hits/M.c. Hammer U Can't Touch This.mp3",
                inTrend: false
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/brand-nubian.png',
                artistName: 'Brand Nubian',
                title: 'Brand Nubian',
                fileUrl: '/src/songs/rap hits/Brand Nubian Brand Nubian.mp3',
                inTrend: true
            }
        ]
    }

]

let searchTerm = '';
export let sortDirection = null;
let subscriber = null;

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

export function getPlaylists() {
    return playlists;
}

// setter
export function setSearchTerm(newSearchTerm) { // функция используется для установки значения поискового запроса.
    searchTerm = newSearchTerm.toLowerCase();
    subscriber();
}

export function getSearchTerm() {
    return searchTerm;
}

export function setSortDirection(direction, sortBy) { // direction указывает направление сортировки ("asc" для по возрастанию или "desc" для по убыванию), а sortBy указывает свойство, по которому нужно сортировать ("Name" или "Duration").
    if (sortDirection === direction) {
        sortDirection = direction === 'asc' ? 'desc' : 'asc'; // совпадает ли текущее значение sortDirection с параметром direction. Если они совпадают, то значение sortDirection переключается между "asc" и "desc".
    } else {
        sortDirection = direction;
    }
    playlistArray[0].songs.sort((a, b) => {
        if (sortDirection === 'asc') {
            if (sortBy === 'Name') {
                return a.nameOfSong.localeCompare(b.nameOfSong); // Если sortDirection равно "asc" и sortBy равно "Name", используется метод localeCompare для сравнения свойства nameOfSong объектов a и b.
            } else if (sortBy === 'Duration') {
                return a.time.localeCompare(b.time);
            }
        } else if (sortDirection === 'desc') {
            if (sortBy === 'Name') {
                return b.nameOfSong.localeCompare(a.nameOfSong);
            } else if (sortBy === 'Duration') {
                return b.time.localeCompare(a.time);
            }
        }
        return 0;
    });
    subscriber();
};


