var sql = require('./../../mysql');

module.exports = function (user, cb, req) {
    sql.query('SELECT *, (SELECT count(*) FROM member_club WHERE member_club.id_club = club.id) AS count ' +
        'FROM club WHERE club.id_club = ?', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(user);
        console.log(results);
        cb(results);
    });
};
