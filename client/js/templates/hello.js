Template.hello.title = function () {
    return 'Stories by Fujiko';
};

Template.hello.userName = function () {
    return Session.get('userName');
};

Template.hello.isCode = function () {
    return Session.get('status') === 'new';
};

Template.hello.isConnected = function () {
    return Session.get('connected');
};

Template.hello.events({

    'change input': function (event, template) {

        var userName = template.find('.user_name').value,
            userID = Session.get('userID');

        Session.set('userName', userName);

        Users.update(userID, {
            $set: {
                name: userName
            }
        });

    },

    'click button': function (event, template) {

        // Session.set('status', 'code');
        Session.set('status', 'video');

    }

});