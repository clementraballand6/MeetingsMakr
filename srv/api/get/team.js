var sql = require('./../../mysql');

module.exports = function (user, cb, req) {
    sql.query('SELECT *' +
        'FROM club WHERE club.id = ?', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(user);
        results[0] && results[0].settings.length ? results[0].settings = JSON.parse(results[0].settings) : '';
        console.log(results);
        cb(results[0]);
    });
};
