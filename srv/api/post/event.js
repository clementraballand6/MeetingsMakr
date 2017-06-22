var sql = require('./../../mysql');

module.exports = function (event, cb, session) {
    sql.query('INSERT INTO event VALUES (?, ?, NULL, ?, ?, ?, ?, ?)', [event.start, event.end, event.city, event.postal_code, event.location, event.detail, event.type], function (error, results, fields) {
        if (error) {
            throw error;
        }
        var eventId = results.insertId;
        sql.query('INSERT INTO event_club VALUES (?, ?, NULL, NULL)', [eventId, event.id_club_ennemy], function (error, results, fields) {
            if (error) throw error;
            sql.query('INSERT INTO event_club VALUES (?, ?, NULL, NULL)', [eventId, event.id_club], function (error, results, fields) {
                cb(results);
                if (error) throw error;
            })
        })
    });
};
