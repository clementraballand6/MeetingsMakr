var sql = require('./../../mysql');

module.exports = function (user, cb, req) {
    sql.query('SELECT *' +
        'FROM member WHERE member.id = ?', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(user);
        console.log(results);
        cb(results[0]);
    });
};
