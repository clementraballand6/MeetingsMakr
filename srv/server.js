var express = require('express');
var path = require('path');
var app = express();
var generate = require("./generate/generate");


app.set('port', 3000);

app.use(express.static(path.join(__dirname, '../app/src')));

// app.get('/', function (req, res) {
//     res.send('hey');
// });

app.listen(app.get('port'), function () {
    console.log("Server running on : http://localhost:" + app.get('port'));
});