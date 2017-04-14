module.exports = function (AppService, App) {
    var self = this;

    App.setTitle('Tableau de bord');

    AppService.getClubs().then(function (res) {
        self.clubs = res.data;
    });

    return self;
};