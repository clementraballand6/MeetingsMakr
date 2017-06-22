var sql = require('./../../mysql');

module.exports = function (club, cb, session) {
    sql.query('INSERT INTO club VALUES (NULL, ?, ?, ?, NULL, NULL)', [club.name, club.city, club.postal_code], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        console.log(session.userId)
        sql.query('INSERT INTO club_user VALUES (?, ?)', [session.userId, results.insertId], function (error, results, fields) {
            cb(results);
            if (error) throw error;

        })
    });
};
