module.exports = function (min, max, cb) {

    var random = function (min, max) {
        return (Math.random() * (max - min) + min).toFixed(0);
    };

    var sql = require('./../../mysql');

    sql.query('SELECT * FROM club order by rand() limit ' + random(min, max), function (error, results, fields) {
        if (error) {
            throw error;
        }
        cb(results);
    });
};
