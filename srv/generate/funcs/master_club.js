module.exports = function (nbMasterClub,cb) {
    var sql = require('./../../mysql');
    var faker = require('faker');
    faker.locale = "fr";

    for (var i = 0; i < nbMasterClub; i++) {
        sql.query('INSERT INTO club VALUES(null, ?, ?, ?, null)', [faker.lorem.word(), faker.address.city(), faker.address.zipCode()], function (error, results, fields) {
            if (error) {
                throw error;
            }
            console.log(results);
            cb(results.insertId);
        });
    }
}
