var sql = require('./../../mysql');

module.exports = function (club, member, cb, session) {
    sql.query('INSERT INTO member VALUES (NULL, ?, ?, ?, ?, NULL)', [member.mail, member.tel, member.firstname, member.lastname], function (error, results, fields) {
        if (error) {
            throw error;
        }
        sql.query('INSERT INTO member_club VALUES (?, ?)', [club.id ,results.insertId], function (error, results, fields) {
            cb(results);
            if (error) throw error;

        })
    });
};
