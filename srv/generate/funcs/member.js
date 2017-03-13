module.exports = function (cb) {
    var sql = require('./../../mysql');
    var faker = require('faker');
    faker.locale = "fr";

    sql.query('INSERT INTO member VALUES(null, ?, ?, ?, ?)', [faker.internet.email(), faker.phone.phoneNumber(), faker.name.firstName(), faker.name.lastName()], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results.insertId);
        cb(results.insertId);
    });
};
