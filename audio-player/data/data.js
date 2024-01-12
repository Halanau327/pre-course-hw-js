let playlists = [
    {
        image: '/audio-player/src/img/hip-hop-hits.png',
        type: 'playlist',
        title: 'Hip-Hop Hits',
        content: '4 tracks, 12m 13s',
        singer: 'Eminem, 50cent, Lloyd Banks and others'
    },
    {
        image: '/audio-player/src/img/rap-hits-1990.png',
        type: 'playlist',
        title: 'Rap Hits 1990s',
        content: '4 tracks, 12m 13s',
        singer: 'Eminem, 50cent, Lloyd Banks and others'
    }
];

let songs = [
    song1: {
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
        imageOfSong: '/audio-player/src/img/eminem.png',
        isHit: '/audio-player/src/img/fire.png',
        nameOfSong: 'Eminem - Rap God',
        buttonPlay: '/audio-player/src/img/play_arrow.png',
        time: '0:00 / 3:41',
        line: '/audio-player/src/img/line.png',
        volume: '/audio-player/src/img/volume.png',
        buttonProperty: '/audio-player/src/img/option.png'
    }
},

]



let subscriber = null;

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}