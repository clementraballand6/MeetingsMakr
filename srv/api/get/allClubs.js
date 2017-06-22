var sql = require('./../../mysql');

module.exports = function (req, cb, session) {
    sql.query('SELECT * FROM club WHERE id_club IS NOT NULL', [], function (error, results, fields) {
        if (error) {
            throw error;
        }
        cb(results);
    });
};
