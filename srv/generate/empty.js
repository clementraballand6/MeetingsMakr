var sql = require('./../mysql');
var emptySQL = "TRUNCATE TABLE meetingsmakr.club; TRUNCATE TABLE meetingsmakr.club_user; TRUNCATE TABLE meetingsmakr.event; TRUNCATE TABLE meetingsmakr.event_club; TRUNCATE TABLE meetingsmakr.event_member; TRUNCATE TABLE meetingsmakr.member; TRUNCATE TABLE meetingsmakr.member_club; TRUNCATE TABLE meetingsmakr.user;";
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
