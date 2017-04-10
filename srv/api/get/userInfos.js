var sql = require('./../../mysql');
var sha1 = require('sha1');

module.exports = function (sess, cb) {
    sql.query('SELECT * FROM user WHERE id = ?', [sess.userId], function (error, results, fields) {
        if (error) {
            throw error;
        }
        cb(results);
    });
};
