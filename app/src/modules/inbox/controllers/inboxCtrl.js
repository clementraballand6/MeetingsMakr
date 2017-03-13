module.exports = function (AppService) {
    var self = this;

    self.currentTab = "Inbox";

    self.contacts = AppService.contacts;

    return self;
};