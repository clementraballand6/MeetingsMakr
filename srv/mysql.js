var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dev',
    password : 'pwsio',
    database : 'MeetingsMakr',
    multipleStatements : true
});

connection.connect();

module.exports = connection;