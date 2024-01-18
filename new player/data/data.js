let playlistArray = [
    {
        playlistCover: {
            image: './src/img/hip-hop-hits.png',
            type: 'Playlist',
            title: 'Hip-Hop Hits',
            content: '4 tracks, 12m 13s',
            singer: 'Eminem, 50cent, Lloyd Banks and others'
        },
        songs: [
            {
                buttonImage: './src/img/vector-white.png',
                isHit: './src/img/fire.png',
                imageOfSong: './src/img/eminem.png',
                nameOfSong: 'Eminem - Rap God',
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 3:41',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            },
            {
                buttonImage: './src/img/vector-white.png',
                isHit: null,
                imageOfSong: './src/img/50-cent.png',
                nameOfSong: '50 cent - In da Club',
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 4:31',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            },
            {
                buttonImage: './src/img/vector-white.png',
                isHit: './src/img/fire.png',
                imageOfSong: './src/img/dmx.png',
                nameOfSong: "DMX - X Gon' Give It To Ya",
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 4:17',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            },
            {
                buttonImage: './src/img/vector-white.png',
                imageOfSong: './src/img/eminem-50cent.png',
                nameOfSong: "Eminem feat 50 Cent, Cashis, Lloyd Banks - You Don't Know",
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 3:13',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            }

        ]

    },
    {
        playlistCover: {
            image: './src/img/rap-hits-1990.png',
            type: 'Playlist',
            title: 'Rap Hits 1990s',
            content: '4 tracks, 12m 13s',
            singer: 'Eminem, 50cent, Lloyd Banks and others'
        },
        songs: [
            {
                buttonImage: './src/img/vector-white.png',
                isHit: './src/img/fire.png',
                imageOfSong: './src/img/public-enemy.png',
                nameOfSong: 'Public Enemy - Fight the Power',
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 3:41',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            },
            {
                buttonImage: './src/img/vector-white.png',
                isHit: './src/img/fire.png',
                imageOfSong: './src/img/vanila-ice.png',
                nameOfSong: 'Vanila Ice - Ice Ice Baby',
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 4:31',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            },
            {
                buttonImage: './src/img/vector-white.png',
                imageOfSong: './src/img/mc-hammer.png',
                nameOfSong: "MC Hammer - You Can’t Touch This",
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 4:17',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            },
            {
                buttonImage: './src/img/vector-white.png',
                imageOfSong: './src/img/brand-nubian.png',
                nameOfSong: "Brand Nubian - Brand Nubian",
                buttonPlay: './src/img/play_arrow.png',
                time: '0:00 / 3:13',
                line: './src/img/line.png',
                volume: './src/img/volume.png',
                buttonProperty: './src/img/option.png'
            }
        ]
    }
];

let searchTerm = '';
export let sortDirection = null;
let subscriber = null;

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

export function getFilteredPlaylist() {
    const regex = new RegExp(searchTerm, 'g')
    const getFilteredPlaylist = playlistArray.map(elem=>({...elem, songs: elem.songs}))

    getFilteredPlaylist.forEach((el) => {
        el.songs = el.songs.filter(song =>{
            return regex.test(song.nameOfSong.toLocaleLowerCase())
        });
    });
    
    return getFilteredPlaylist;
}

// setter
export function setSearchTerm(newSearchTerm) { // функция используется для установки значения поискового запроса.
    searchTerm = newSearchTerm.toLowerCase();
    subscriber();
}

export function getSearchTerm() {
    return searchTerm;
}

/**
 * 
 * @param {'asc' | 'desc'} direction 
 */

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



