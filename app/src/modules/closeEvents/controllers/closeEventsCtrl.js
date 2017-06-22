module.exports = function (AppService, App, EventService, Notif, $timeout) {
    var self = this;
    App.setTitle('Evenements à venir');

    self.events = [];
    self.range = 10;

    self.formatDate = function (date) {
        var date = new Date(date);
        return date.toLocaleDateString() + " à " + date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 3).replace(':', 'h');
    }

    var initEvents = function () {
        AppService.getClubs().then(function (clubs) {
            clubs.data.forEach(function (club) {
                console.log(club);
                EventService.getMasterClubEvents(club.id).then(function (res) {
                    console.log(res);
                    self.events = self.events.concat(res.data.filter(function (event) {
                        var today = new Date();
                        return new Date(event.start) > today && new Date(event.start) < today.setDate(today.getDate() + self.range);
                    }));
                    self.events.length ? self.showNoEvents = false : '';
                });
            })
        })
    }

    initEvents();

    return self;
};