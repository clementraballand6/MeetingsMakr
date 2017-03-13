module.exports = function ($stateParams, AppService, Message) {
    var self = this;

    self.contact = AppService.contacts[$stateParams.id];

    self.messages = self.contact.messages;

    self.contact.unread = 0;

    self.sendMessage = function (key) {
        if (!self.messageTextarea || !self.messageTextarea.length) return;
        if (key.which === 13 && !key.shiftKey) {
            key.preventDefault();
            self.messages.push(new Message(self.messageTextarea, +new Date(), false));
            self.messageTextarea = "";
        }
    };

    return self;
};