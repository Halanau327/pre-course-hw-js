let playlists = [
    {
        image: '/audio-player/src/img/hip-hop-hits.png',
        type: 'Playlist',
        title: 'Hip-Hop Hits',
        content: '4 tracks, 12m 13s',
        singer: 'Eminem, 50cent, Lloyd Banks and others'
    },
    {
        image: '/audio-player/src/img/rap-hits-1990.png',
        type: 'Playlist',
        title: 'Rap Hits 1990s',
        content: '4 tracks, 12m 13s',
        singer: 'Eminem, 50cent, Lloyd Banks and others'
    }
];

let songs = {
    song1: [
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/eminem.png',
            isHit: '/audio-player/src/img/fire.png',
            nameOfSong: 'Eminem - Rap God',
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 3:41',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        },
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/50-cent.png',
            nameOfSong: '50 cent - In da Club',
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 4:31',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        },
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/dmx.png',
            isHit: '/audio-player/src/img/fire.png',
            nameOfSong: "DMX - X Gon' Give It To Ya",
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 4:17',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        },
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/eminem-50cent.png',
            nameOfSong: "Eminem feat 50 Cent, Cashis, Lloyd Banks - You Don't Know",
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 3:13',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        }

    ],
    song2: [
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/public-enemy.png',
            isHit: '/audio-player/src/img/fire.png',
            nameOfSong: 'Public Enemy - Fight the Power',
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 3:41',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        },
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/vanila-ice.png',
            isHit: '/audio-player/src/img/fire.png',
            nameOfSong: 'Vanila Ice - Ice Ice Baby',
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 4:31',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        },
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/mc-hammer.png',
            nameOfSong: "MC Hammer - You Can’t Touch This",
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 4:17',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        },
        {
            button1: '/audio-player/src/img/vector-white.png',
            imageOfSong: '/audio-player/src/img/brand-nubian.png',
            nameOfSong: "Brand Nubian - Brand Nubian",
            buttonPlay: '/audio-player/src/img/play_arrow.png',
            time: '0:00 / 3:13',
            line: '/audio-player/src/img/line.png',
            volume: '/audio-player/src/img/volume.png',
            buttonProperty: '/audio-player/src/img/option.png'
        }
    ]
};


let subscriber = null;


export function getPlaylistsData() {
    return playlists;  
}

export function getSongsData() {
    return songs;
}

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}