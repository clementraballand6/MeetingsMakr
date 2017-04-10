var sql = require('./../../mysql');
var sha1 = require('sha1');

module.exports = function (user, cb, session) {
    console.log(user);
    sql.query('UPDATE user SET lastname = ?,' +
        'firstname = ?,' +
        'phone = ?,' +
        'mail = ?,' +
        'city = ?,' +
        'postal_code = ? WHERE id = ?', [user.lastname, user.firstname, user.phone, user.mail, user.city, user.postal_code, session.userId], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(user);
        console.log(results);
        cb(results);
    });
};
