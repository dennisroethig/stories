console.log('main.js running');

Users = new Meteor.Collection('users');


// enable / disable debug mode
if (params.debug) {
    console.log('debug on');
    Session.set('debug', true);
} else {
    console.log('debug off');
    Session.set('debug', false);
}


// check if we have a new user or connect situation
if (params.connect) {
    connectSecondDevice(params.connect);
} else {
    setNewUser();
}





function setNewUser () {

    var deviceID = guid(),
        userID = Users.insert({
            created: (new Date()).getTime(),
            name: false,
            device1: deviceID,
            device2: false
        });

    Session.set('status', 'new');
    Session.set('connected', false);
    Session.set('device', 'first');
    Session.set('deviceID', deviceID);
    Session.set('userID', userID);
    Session.set('userName', '');

}

function connectSecondDevice (connectID, counter) {

    var counter = counter || 0,
        clientID = connectID.substr(1),
        user = Users.findOne({ device1: clientID }),
        deviceID = guid();

    Session.set('connect', connectID);

    if (user) {

        Users.update(user._id, {
            $set: {
                device2: deviceID
            }
        });

        Session.set('userName', user.name);
        Session.set('connected', true);

    } else if (counter < 10) {

        counter++;
        
        (function (counter) {
            setTimeout(function () {
                connectSecondDevice(connectID, counter);
            }, 1000);
        })(counter);

    }

}

onYouTubePlayerReady = function (playerId) {
    ytplayer = document.getElementById("videoplayer");
    console.log('ready', playerId);
}
