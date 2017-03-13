module.exports = function (memberId, eventId) {
    var sql = require('./../../mysql');
    var event = require('./event');
    var faker = require('faker');
    faker.locale = "fr";

    sql.query('INSERT INTO event_member VALUES(?, ?)', [memberId, eventId], function (error, results, fields) {
        console.log(results);
        if (error) {
            throw error;
        }
    });
};
