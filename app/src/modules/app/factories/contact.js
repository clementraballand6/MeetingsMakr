module.exports = function (Message) {
    var Contact = function (name, messages, unread) {
        this.name = name;
        this.unread = unread !== undefined ? unread : 0;
        this.messages = [];

        if (messages) {
            for (var i = 0; i < messages.length; i++) {
                this.addMessage(new Message(messages[i].content, messages[i].received_at, messages[i].from_contact))
            }
        }
    };

    Contact.prototype.addMessage = function (message) {
        this.messages.push(message);
    };

    Contact.prototype.getMostRecent = function () {
        var tmp = angular.copy(this.messages);
        tmp.sort(function (a, b) {
            if (a.received_at > b.received_at)
                return -1;
            if (a.received_at < b.received_at)
                return 1;

            return 0;
        });

        return tmp[0];
    };

    return Contact;
};