module.exports = function (AppService, App) {
    var self = this;
    App.setTitle('Mes clubs');

    AppService.getClubs().then(function (res) {
        self.clubs = res.data;
    });

    return self;
};