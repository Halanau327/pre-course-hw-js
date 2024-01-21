let playlists = [
    {
        title: 'Hip-Hop Hits',
        coverImageUrl: '/src/img/hip-hop-hits.png',
        info: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
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
                fileUrl: "/src/songs/hiphop hits/Eminem You Don't Know Ft 50 Cent.mp3",
                inTrend: false
            }
        ]
    },
    {
        title: 'Rap Hits 1990s',
        coverImageUrl: '/src/img/rap-hits-1990.png',
        info: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
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

let subscriber = null;

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

export function getPlaylists() {
    return playlists;
}

