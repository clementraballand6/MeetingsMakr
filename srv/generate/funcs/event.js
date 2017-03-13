module.exports = function (cb) {
    var random = function (min, max) {
        return (Math.random() * (max - min) + min).toFixed(0);
    };
    var sql = require('./../../mysql');
    var faker = require('faker');
    faker.locale = "fr";
    var locations = [
        "terrain de foot a coté tennis",
        "salle municipale",
        "salle verte",
        null,
        "salle jean louis bauvais",
        "complexe sportif",
        "bar le saint michel",
        null,
        "salle des fêtes",
        "terrain de pétanque",
        "lieux pas encore determiné",
        "soit salle verte soit salle omnisport",
        "terrain de volley",
        "terrain de basket",
        "terrain de golf",
        null,
        null,
        "karting de la ville",
        "chez michel alain, le coach de l'équipe B de foot",
        "chez george dubout, l'entraineur des benjamins"
    ];

    var randomLoc = locations[random(0, locations.length)];

    sql.query('INSERT INTO event VALUES(?, null, null, ?, ?, ?, ?, 0)', [faker.date.recent(), faker.address.city(), faker.address.zipCode(), faker.address.streetAddress(), randomLoc], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results.insertId);
        cb(results.insertId);
    });
};
