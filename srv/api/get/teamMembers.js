var sql = require('./../../mysql');

module.exports = function (user, cb, req) {
    sql.query('SELECT * FROM member, member_club WHERE member.id = member_club.id_member AND member_club.id_club = ?', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        results = results.map(function (res) {
            return {
                id: res.id,
                mail: res.mail,
                tel: res.tel,
                firstname: res.firstname,
                lastname: res.lastname
            }
        })
        cb(results);
    });
};
