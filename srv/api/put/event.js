var sql = require('./../../mysql');

module.exports = function (event, cb, session) {
    sql.query('UPDATE event SET start = ?,' +
        'city = ?,' +
        'end = ?,' +
        'location = ?,' +
        'detail = ? ' +
        'WHERE id = ?', [event.start, event.city, event.end, event.location, event.detail, event.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        cb(results);
    });
};
