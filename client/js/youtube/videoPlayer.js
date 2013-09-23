console.log('video Player loaded');

videoPlayer = false;

youtubeVideo = {

    player: false,

    done: false,

    onPlayerStateChange: function(event) {
        console.log('change', event);
        if (event.data == YT.PlayerState.PLAYING && !this.done) {
            setTimeout(youtubeVideo.stopVideo, 10000);
            this.done = true;
        }
    },

    stopVideo: function(event) {
        
        var player = youtubeVideo.player,
            userID = Session.get('userID'),
            connected = Session.equals('connected', true);

        if (connected) {
            console.log('no stopping here...')
        } else {
            player.pauseVideo();

            Users.update(userID, {
                $set: {
                    videoTime: player.getCurrentTime()
                }
            });

            Session.set('status', 'code');
        }

    }

};


onYouTubePlayerAPIReady = function() {

    var userID = Session.get('userID'),
        user = Users.findOne(userID);

    youtubeVideo.player = new YT.Player('ytplayer', {
        height: '315',
        width: '560',
        videoId: 'FTszc3NhYn8',
        playerVars: {
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            start: user.videoTime || 0
        },
        events: {
            'onStateChange': youtubeVideo.onPlayerStateChange
        }
    });
}
