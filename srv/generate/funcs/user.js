module.exports = function (cb) {
    var sha1 = require('sha1');
    var sql = require('./../../mysql');
    var faker = require('faker');
    faker.locale = "fr";

    sql.query('INSERT INTO user VALUES(null, ?, ?, ?, ?, ?, ?, ?)', [faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.city(), faker.address.zipCode(), sha1(faker.internet.password())], function (error, results, fields) {
        if (error) {
            throw error;
        }
        cb(results.insertId);
    });
};
