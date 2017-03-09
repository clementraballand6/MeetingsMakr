module.exports = function (masterClubId, cb) {
    var sql = require('./../mysql');
    var faker = require('faker');
    faker.locale = "fr";
    var test = 0;
    var nbChildClub = (Math.random() * (6 - 2) + 2).toFixed(0);
    // return;
    for (var i = 0; i < nbChildClub; i++) {
        sql.query('INSERT INTO club VALUES(null, ?, ?, ?, ?)', [faker.lorem.word(), faker.address.city(), faker.address.zipCode(), masterClubId], function (error, results, fields) {
            if (error) {
                throw error;
            }
            cb(results.insertId);
        });
    }
};
