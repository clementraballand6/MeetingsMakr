var conf = require('./config');

// generators queries
var randomMembers = require('./funcs/randomMembers');
var event_member = require('./funcs/event_member');
var event = require('./funcs/event');

var random = function (min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
};

for (var x = 0; x < conf.nbEventsMember; x++) {
    randomMembers(3, 8, function (members) {
        console.log(members.length);
        event(function (eventId) {
            for (var i = 0; i < members.length; i++) {
                var member = members[i];
                event_member(member.id, eventId);
            }
        });
    });
}
