var express = require('express'),
    session = require('express-session'),
    path = require('path'),
    login = require('./api/get/login'),
    clubs = require('./api/get/clubs'),
    club = require('./api/get/club'),
    teamMembers = require('./api/get/teamMembers'),
    team = require('./api/get/team'),
    updateTeam = require('./api/put/team'),
    userInfos = require('./api/get/userInfos'),
    updateUser = require('./api/put/user'),
    bodyParser = require('body-parser'),
    app = express(),
    sess;

app.set('port', 3000);

app.use(session({secret: 'keyboard cat', cookie: {maxAge: 60000}}))
app.use(express.static(path.join(__dirname, '../app/src')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/api/login', function (req, res) {
    sess = req.session;
    console.log(req.query);
    login(req.query, function (results) {
        if (results.length) {
            sess.userId = results[0].id;
            console.log(sess);
            res.end(JSON.stringify(results[0]));
        } else {
            res.status(400);
            res.end(JSON.stringify({error: "Bad authentication"}));
        }
    })
});

app.get('/api/isAuth', function (req, res) {
    sess === undefined ? res.end(JSON.stringify(0)) : res.end(JSON.stringify(1));
});

app.get('/api/userInfos', function (req, res) {
    userInfos(sess, function (results) {
        res.end(JSON.stringify(results[0]));
    });
});

app.get('/api/clubs', function (req, res) {
    clubs(sess, function (results) {
        res.end(JSON.stringify(results));
    });
});

app.get('/api/club', function (req, res) {
    club(sess, function (results) {
        res.end(JSON.stringify(results));
    }, req.query);
});

app.get('/api/team', function (req, res) {
    team(sess, function (results) {
        res.end(JSON.stringify(results));
    }, req.query);
});

app.get('/api/teamMembers', function (req, res) {
    teamMembers(sess, function (results) {
        res.end(JSON.stringify(results));
    }, req.query);
});

app.put('/api/user', function (req, res) {
    updateUser(req.body, function (results) {
        sess.clubs = results;
        res.end(JSON.stringify(results));
    }, sess);
});

app.put('/api/team', function (req, res) {
    updateTeam(req.body, function (results) {
        res.end(JSON.stringify(results));
    }, sess);
});

app.listen(app.get('port'), function () {
    console.log("Server running on : http://localhost:" + app.get('port'));
});