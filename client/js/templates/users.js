Template.users.debugMode = function () {
    return Session.get('debug');
};


Template.users.allUsers = function () {
    // return Users.find({created: 1379512813190});
    return Users.find({}, {});
};