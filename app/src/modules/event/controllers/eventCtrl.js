module.exports = function (AppService, App, EventService, Notif, $stateParams) {
    var self = this;
    App.setTitle('Informations de l\'évènement');

    self.from = $stateParams.from;
    console.log($stateParams);
    self.event = {};
    EventService.getEvent($stateParams.id).then(function (res) {
        self.event = res.data[0];
        console.log(self.event);
        var start = new Date(self.event.start);
        var end = self.event.end !== null ? new Date(self.event.end) : '';
        self.event.start = start;
        self.event.end = end;
    });

    self.updateEventInfo = function () {
        var start = new Date(self.event.start);
        var end = self.event.end !== null ? new Date(self.event.end) : '';
        self.event.start = start.toISOString();
        self.event.end = end.toISOString();
        EventService.updateEvent(self.event).then(function () {
            Notif.success('Evènement mis à jour.');
        });
    }

    return self;
};