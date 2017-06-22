var sql = require('./../../mysql');

module.exports = function (req, cb) {
    sql.query('select * from event, event_club where id = ? and event.id = event_club.id_event', [req.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results);
        cb(results);
    });
};
