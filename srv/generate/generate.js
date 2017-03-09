var sql = require('./../mysql');
var faker = require('faker');
var drop = require('./empty');
var master_club = require('./master_club');
var child_club = require('./child_club');

master_club(function (masterClubId) {
    child_club(masterClubId, function (childClubId) {
        console.log(childClubId);
    });
});