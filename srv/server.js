var express = require('express'),
    session = require('express-session'),
    path = require('path'),
    login = require('./api/login'),
    app = express(),
    sess;

app.set('port', 3000);

app.use(session({secret: 'keyboard cat', cookie: {maxAge: 60000}}))
app.use(express.static(path.join(__dirname, '../app/src')));

app.get('/api/login', function (req, res) {
    sess = req.session;
    login(req.query, function (results) {
        if (results.length) {
            res.end(JSON.stringify(results[0]));
        } else {
            res.status(400);
            res.end(JSON.stringify({error: "Bah authentication"}));
        }
    })
});

app.listen(app.get('port'), function () {
    console.log("Server running on : http://localhost:" + app.get('port'));
});