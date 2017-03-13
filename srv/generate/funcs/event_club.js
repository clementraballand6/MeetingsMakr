module.exports = function (clubId, eventId) {
    var sql = require('./../../mysql');
    var event = require('./event');
    var faker = require('faker');
    faker.locale = "fr";

    sql.query('INSERT INTO event_club VALUES(?, ?)', [eventId, clubId], function (error, results, fields) {
        console.log(results);
        if (error) {
            throw error;
        }
    });
};
