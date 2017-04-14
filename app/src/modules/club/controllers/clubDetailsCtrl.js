module.exports = function (AppService, ClubService, $stateParams, $state, Notif, App) {
    var self = this;

    AppService.getClubs().then(function (res) {
        self.club = res.data.find(function (club) {
            return club.id == $stateParams.id;
        });

        if (self.club === undefined) {
            $state.go('club');
            Notif.error("Vous n'avez pas accès à ce club");
            return;
        }

        App.setTitle('Equipes du club ' + self.club.name);

        ClubService.getClubDetails(self.club.id).then(function (res) {
            self.teams = res.data;
        })
    });

    return self;
};