module.exports = function (clubId, nb) {
    var sql = require('./../../mysql');
    var user = require('./user');
    var faker = require('faker');
    faker.locale = "fr";
    console.log(clubId);
    for (var i = 0; i < nb; i++) {
        user(function (userId) {
            sql.query('INSERT INTO club_user VALUES(?, ?)', [userId, clubId], function (error, results, fields) {
                if (error) {
                    throw error;
                }
            });
        });
    }
};
