angular.module('app.team', [])
    .controller('TeamCtrl', require('./controllers/teamCtrl'))
    .controller('TeamDetailsCtrl', require('./controllers/teamDetailsCtrl'))
    .controller('TeamMembersCtrl', require('./controllers/teamMembersCtrl'))
    .controller('TeamEventsCtrl', require('./controllers/teamEventsCtrl'))
    .controller('TeamSettingsCtrl', require('./controllers/teamSettingsCtrl'))
    .controller('FindTeamCtrl', require('./controllers/findTeamCtrl'))
    .service('TeamService', require('./services/teamService'));