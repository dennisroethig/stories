console.log('video Player loaded');

videoPlayer = false;

onYouTubePlayerAPIReady = function() {
    console.log('videoPlayer init');
    videoPlayer = new YT.Player('ytplayer', {
        height: '315',
        width: '560',
        videoId: 'FTszc3NhYn8',
        playerVars: {
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

done = false;

onPlayerStateChange = function(event) {
    console.log('change', event);
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}