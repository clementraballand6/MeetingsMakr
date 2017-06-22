var sql = require('./../../mysql');

module.exports = function (req, cb, session) {
    sql.query('SELECT * FROM event WHERE type = 1', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        //@TODO trouver pour 2x id_club mm requete enculé, cdlt
        cb(results)
    });
};
