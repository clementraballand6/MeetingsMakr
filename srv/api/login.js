var sql = require('./../mysql');
var sha1 = require('sha1');

module.exports = function (user, cb) {
    sql.query('SELECT * FROM user WHERE mail = ? AND password = SHA1(?)', [user.mail, user.password], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(user);
        console.log(results);
        cb(results);
    });
};
