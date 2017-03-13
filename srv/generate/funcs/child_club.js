module.exports = function (masterClubId, min, max,cb) {
    var sql = require('./../../mysql');
    var faker = require('faker');
    faker.locale = "fr";
    var nbChildClub = (Math.random() * (max - min) + min).toFixed(0);

    for (var i = 0; i < nbChildClub; i++) {
        sql.query('INSERT INTO club VALUES(null, ?, ?, ?, ?)', [faker.lorem.word(), faker.address.city(), faker.address.zipCode(), masterClubId], function (error, results, fields) {
            if (error) {
                throw error;
            }
            cb(results.insertId);
        });
    }
};
