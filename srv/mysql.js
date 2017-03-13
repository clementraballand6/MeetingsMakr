var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dev',
    password : 'pwsio',
    database : 'MeetingsMakr'
});

connection.connect();

module.exports = connection;