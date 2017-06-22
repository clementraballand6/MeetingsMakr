var sql = require('./../../mysql');

module.exports = function (req, cb) {
    sql.query('select event_club.score, event_club.winner, event.*, event.id as id_event, club.id as id_club from event, event_club, club where event.id = event_club.id_event and club.id = event_club.id_club and club.id = ?', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        cb(results);
    });
};
