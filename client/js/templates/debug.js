Template.debug.debugMode = function () {
    return Session.get('debug');
};

Template.debug.sessions = function () {
    map = [];
    for (prop in Session.keys) {
        map.push({key: prop, value: Session.get(prop)});
    }
    return map;
};

Template.debug.events({

    'change input': function (event, template) {
        var textfield = template.find('#textfield_' + this.key);
        Session.set(this.key, textfield.value);
    }

});