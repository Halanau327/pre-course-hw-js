let leftPart = {
    playlistCover:
    {
        image: './src/img/hip-hop-hits.png',
        type: 'Playlist',
        title: 'Hip-Hop Hits',
        content: '4 tracks, 12m 13s',
        singer: 'Eminem, 50cent, Lloyd Banks and others'
    },
    song1: [
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

    ],

};

let rightPart = {
    playlistCover:
    {
        image: './src/img/rap-hits-1990.png',
        type: 'Playlist',
        title: 'Rap Hits 1990s',
        content: '4 tracks, 12m 13s',
        singer: 'Eminem, 50cent, Lloyd Banks and others'
    },
    song2: [
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
};

let subscriber = null;


export function getLeftPart() {
    return leftPart;
}

export function getRightPart() {
    return rightPart;
}

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

