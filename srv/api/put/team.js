var sql = require('./../../mysql');

module.exports = function (team, cb, session) {
    sql.query('UPDATE club SET name = ?,' +
        'city = ?,' +
        'settings = ?,' +
        'postal_code = ? WHERE id = ?', [team.name, team.city, team.settings, team.postal_code, team.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        cb(results);
    });
};
