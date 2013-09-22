Users = new Meteor.Collection('users');

Meteor.startup(function () {
    console.log('server started!');

    // Users.remove({});

    // if (Users.find().count() === 0) {

    //     for (var i = 0; i < 3; i++) {
    //         Users.insert({
    //             device1: false,
    //             device2: false
    //         });
    //     }

    // }

});