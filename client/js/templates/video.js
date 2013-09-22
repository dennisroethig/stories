Template.video.isActive = function () {
    return Session.get('status') === 'video';
};



Template.video.rendered = function () {

    if (Session.equals('status', 'video')) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

}