module.exports = function (AppService, App, ClubService, Notif) {
    var self = this;
    App.setTitle('Mes clubs');

    self.newClub = {};

    var initClubs = function () {
        AppService.getClubs().then(function (res) {
            self.clubs = res.data;
        });
    }

    self.removeClub = function (index) {
        ClubService.removeClub(self.clubs[index].id).then(function () {
            Notif.success('Club ' + self.clubs[index].name + ' supprimé.');
            initClubs();
        })
    }

    self.addClub = function () {
        ClubService.addClub(self.newClub).then(function () {
            initClubs();
            Notif.success('Club ' + self.newClub.name + ' ajouté.');
            self.newClub = {};
            self.showAddClubForm = false;
        });
    }

    initClubs();

    return self;
};