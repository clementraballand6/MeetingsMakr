var conf = require('./config');

// generators queries
var randomClubs = require('./funcs/randomClubs');
var event_club = require('./funcs/event_club');
var event = require('./funcs/event_meets');

var random = function (min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
};

for (var x = 0; x < conf.nbEventsMeets; x++) {
    randomClubs(2, 2, function (clubs) {
        console.log(clubs.length);
        event(function (eventId) {
            for (var i = 0; i < clubs.length; i++) {
                var club = clubs[i];
                event_club(club.id, eventId);
            }
        });
    });
}
