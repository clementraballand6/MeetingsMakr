var sql = require('./../../mysql');

module.exports = function (user, cb) {
    sql.query('SELECT *, (select count(*) from club where club.id_club = club_user.id_club ) as count ' +
        'FROM club_user, club WHERE club_user.id_user = ? AND club.id = club_user.id_club', [user.userId], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(user);
        console.log(results);
        cb(results);
    });
};
