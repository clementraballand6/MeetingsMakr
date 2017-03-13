module.exports = function (clubId, nb) {
    var sql = require('./../../mysql');
    var member = require('./member');
    var faker = require('faker');
    faker.locale = "fr";

    for (var i = 0; i < nb; i++) {
        member(function (memberId) {
            sql.query('INSERT INTO member_club VALUES(?, ?)', [clubId, memberId], function (error, results, fields) {
                if (error) {
                    throw error;
                }
            });
        });
    }
};
