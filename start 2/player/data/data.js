let playlists = [
    {
        coverImageUrl: '/src/img/hip-hop-hits.png',
        info: {
            infoName: 'Playlist',
            title: 'Hip-Hop Hits',
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 1032,
            artistsOfPlaylist: 'Eminem, 50cent, Lloyd Banks',
            others: 'and others'
        },
        tracks: [
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/eminem.png',
                artistName: 'Eminem',
                title: 'Rap God',
                fileUrl: '/src/songs/hiphop hits/Eminem Rap God.mp3',
                inTrend: true,
                tracksDurationInSeconds: 363
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/50-cent.png',
                artistName: '50cent',
                title: 'In Da Club',
                fileUrl: '/src/songs/hiphop hits/50 Cent In Da Club.mp3',
                inTrend: false,
                tracksDurationInSeconds: 193
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/dmx.png',
                artistName: 'DMX',
                title: "X Gon' Give It To Ya",
                fileUrl: "/src/songs/hiphop hits/Dmx X Gon' Give It To Ya.mp3",
                inTrend: true,
                tracksDurationInSeconds: 219
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/eminem-50cent.png',
                artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                title: "You Don't Know",
                fileUrl: "/src/songs/hiphop hits/Eminem You Don't Know Ft 50 Cent .mp3",
                inTrend: false,
                tracksDurationInSeconds: 257
            }
        ]
    },
    {
        coverImageUrl: '/src/img/rap-hits-1990.png',
        info: {
            infoName: 'Playlist',
            title: 'Rap Hits 1990s',
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 1088,
            artistsOfPlaylist: 'Eminem, 50cent, Lloyd Banks',
            others: 'and others'
        },
        tracks: [
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/public-enemy.png',
                artistName: 'Public Enemy',
                title: 'Fight the Power',
                fileUrl: '/src/songs/rap hits/Public Enemy Fight The Power.mp3',
                inTrend: false,
                tracksDurationInSeconds: 282
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/vanila-ice.png',
                artistName: 'Vanila Ice',
                title: 'Ice Ice Baby',
                fileUrl: '/src/songs/rap hits/Vanilla Ice Ice Ice Baby.mp3',
                inTrend: true,
                tracksDurationInSeconds: 271
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/mc-hammer.png',
                artistName: 'MC Hammer',
                title: "You Can’t Touch This",
                fileUrl: "/src/songs/rap hits/M.c. Hammer U Can't Touch This.mp3",
                inTrend: false,
                tracksDurationInSeconds: 257
            },
            {
                buttonImage: '/src/img/vector-white.png',
                coverImageUrl: '/src/img/brand-nubian.png',
                artistName: 'Brand Nubian',
                title: 'Brand Nubian',
                fileUrl: '/src/songs/rap hits/Brand Nubian Brand Nubian.mp3',
                inTrend: true,
                tracksDurationInSeconds: 278
            }
        ]
    }

]

let searchTerm = '';
let sortDirection = null;
let subscriber = null;

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

// getter
export function getPlaylists() {
    const filteredPlaylists = playlists.map((playlist) => {
        const filteredTracks = playlist.tracks.filter((track) => {
            const artistMatch = track.artistName.toLowerCase().includes(searchTerm);
            const titleMatch = track.title.toLowerCase().includes(searchTerm);
            return artistMatch || titleMatch; //трек будет включен в отфильтрованный список, если хотя бы одно из условий выполняется.
        });

        return {
            ...playlist,
            tracks: filteredTracks // переопределяем свойство tracks и присваиваем ему значение filteredTracks.
        };
    });

    return filteredPlaylists;
}



// setter
export function setSearchTerm(newSearchTerm) { // функция используется для установки значения поискового запроса.
    searchTerm = newSearchTerm.toLowerCase();
    subscriber();
}

export function getSearchTerm() { 
    return searchTerm;
}

export function sortTracks(selectedOption) {
    let tracks;
    if (selectedOption === 'Name') {
      tracks = playlists.flatMap((playlist) => playlist.tracks);
      tracks.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else if (selectedOption === 'Duration') {
      tracks = playlists.flatMap((playlist) => playlist.tracks);
      tracks.sort((a, b) => {
        const durationA = a.tracksDurationInSeconds;
        const durationB = b.tracksDurationInSeconds;
        return durationA - durationB;
      });
    }
    subscriber();
}

// /**
//  * 
//  * @param {'asc' | 'desc'} direction 
//  */
// export function setSortDirection(direction, sortBy) { // direction указывает направление сортировки ("asc" для по возрастанию или "desc" для по убыванию), а sortBy указывает свойство, по которому нужно сортировать ("Name" или "Duration").
//     sortDirection = direction;
//     for (let i = 0; i < playlists.length; i++) {
//         const playlistSongs = playlists[i].tracks;
//         playlistSongs.sort((a, b) => {
//             if (sortDirection === 'asc') {
//                 if (sortBy === 'Name') {
//                     return a.artistName.localeCompare(b.artistName); // Если sortDirection равно "asc" и sortBy равно "Name", используется метод localeCompare для сравнения свойства nameOfSong объектов a и b.
//                 } else if (sortBy === 'Duration') {
//                     return a.tracksDurationInSeconds - (b.tracksDurationInSeconds);
//                 }
//             } else if (sortDirection === 'desc') {
//                 if (sortBy === 'Name') {
//                     return b.artistName.localeCompare(a.artistName);
//                 } else if (sortBy === 'Duration') {
//                     return b.tracksDurationInSeconds - (a.tracksDurationInSeconds);
//                 }
//             }
//             return 0;
//         });
//     }
//     subscriber();
// }





