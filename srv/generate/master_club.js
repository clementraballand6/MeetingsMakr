module.exports = function (cb) {
    var sql = require('./../mysql');
    var faker = require('faker');
    faker.locale = "fr";
    var nbMasterClub = 20;
    var ids = [];
    for (var i = 0; i < nbMasterClub; i++) {
        sql.query('INSERT INTO club VALUES(null, ?, ?, ?, null)', [faker.lorem.word(), faker.address.city(), faker.address.zipCode()], function (error, results, fields) {
            if (error) {
                throw error;
            }
            cb(results.insertId);
        });
    }
}
