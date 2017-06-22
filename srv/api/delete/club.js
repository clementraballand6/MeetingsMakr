var sql = require('./../../mysql');

module.exports = function (id, cb, session) {
    sql.query('DELETE FROM club_user WHERE id_club = ?; DELETE FROM event_club WHERE id_club = ?; DELETE FROM member_club WHERE id_club = ?; DELETE FROM club WHERE id = ?',
        [id, id, id, id], function (error, results, fields) {
            if (error) {
                throw error;
            }
            console.log('id : ' + id);
            console.log(results);
            cb(results);
        });
};
