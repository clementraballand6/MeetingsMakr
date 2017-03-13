var sql = require('./../mysql');
var emptySQL = "TRUNCATE TABLE club; TRUNCATE TABLE club_user; TRUNCATE TABLE event; TRUNCATE TABLE event_club; TRUNCATE TABLE event_member; TRUNCATE TABLE member; TRUNCATE TABLE member_club; TRUNCATE TABLE user;";
var queries = emptySQL.split(';');

sql.query("SET FOREIGN_KEY_CHECKS=0", function (error, results, fields) {
    if (error) {
        throw error;
    }
});

for (var i = 0; i < queries.length - 1; i++) {
    var query = queries[i];
    sql.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        }
    });

}

sql.query("SET FOREIGN_KEY_CHECKS=1", function (error, results, fields) {
    if (error) {
        throw error;
    }
});
