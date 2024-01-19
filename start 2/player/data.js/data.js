let playlist = {
    title: 'Hip-Hop Hits',
    coverImageUrl: '/src/img/hip-hop-hits.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: '/src/img/eminem.png/',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: '/src/songs/hiphop hits/Eminem Rap God.mp3',
            isHot: false
        },
        {
            coverImageUrl: '/src/img/50-cent.png',
            artistName: '50cent',
            title: 'In Da Club',
            fileUrl: '/src/songs/hiphop hits/50 Cent In Da Club.mp3',
            isHot: true
        }
    ]
}

let subscriber = null;

export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}

export function getPlaylist() {
    return playlist;
}
