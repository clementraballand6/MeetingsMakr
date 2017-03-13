// empty all before generating
require('./empty');

var conf = require('./config');

// generators queries
var master_club = require('./funcs/master_club');
var child_club = require('./funcs/child_club');
var member_club = require('./funcs/member_club');
var user_club = require('./funcs/user_club');

var random = function (min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
};

master_club(conf.nbMasterClubs, function (masterClubId) {
    child_club(masterClubId, conf.nbChildClub.min, conf.nbChildClub.max, function (childClubId) {
        // generate between 10-15 members per teams
        member_club(childClubId, random(10, 15));

        // generate between 2-5 users per teams
        user_club(childClubId, random(2, 5));
    });

    // generate between 1-2 user for the master club
    user_club(masterClubId, random(1, 2));
});