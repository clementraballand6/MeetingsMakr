module.exports = function (Message, Contact) {
    var self = this;

    var contacts = [
        {
            unread: 1,
            name: "Antoine",
            messages: [
                {
                    from_contact: true,
                    content: "Salut!! cdsdda va ?",
                    received_at: 1289323620596
                },
                {
                    from_contact: true,
                    content: "Salut!! cdsdda va ?",
                    received_at: 1289323620596
                },
                {
                    from_contact: true,
                    content: "Salut!! cdsdda va ?",
                    received_at: 1289323620596
                },
                {
                    from_contact: true,
                    content: "Salut!! cdsdda va ?",
                    received_at: 1289323620596
                },
                {
                    from_contact: true,
                    content: "Salut!! cdsdda va ?",
                    received_at: 1289323620596
                },
                {
                    from_contact: true,
                    content: "Salut!! cdsdda va ?",
                    received_at: 1289323620596
                },
                {
                    from_contact: true,
                    content: "Salut!! ca va ?",
                    received_at: 1285323700006
                },
                {
                    from_contact: true,
                    content: "Salut!! ca va ?",
                    received_at: 1282314800006
                }
            ]
        },
        {
            unread: 3,
            name: "Thierry",
            messages: [
                {
                    from_contact: true,
                    content: "Salut!! ca va ?",
                    received_at: 1281523620596
                },
                {
                    from_contact: false,
                    content: "Salut!! ca va ???????",
                    received_at: 1283823620596
                },
                {
                    from_contact: true,
                    content: "Salut!! ca va ?",
                    received_at: 1281123620596
                }
            ]
        },
        {
            unread: 0,
            name: "Josef",
            messages: [
                {
                    from_contact: true,
                    content: "Salut!! ca va ?",
                    received_at: 1280823620596
                },
                {
                    from_contact: true,
                    content: "Salut!! ca va ?",
                    received_at: 1280923620596
                },
                {
                    from_contact: false,
                    content: "Salut!! ca va ?",
                    received_at: 1287223620596
                }
            ]
        }
    ];

    self.contacts = [];

    self.sortContacts = function () {
        self.contacts.sort(function (a, b) {
            if (a.getMostRecent().received_at > b.getMostRecent().received_at)
                return -1;
            if (a.getMostRecent().received_at < b.getMostRecent().received_at)
                return 1;

            return 0;
        });
    };

    for (var i = 0; i < contacts.length; i++) {
        var c = contacts[i];

        self.contacts.push(new Contact(c.name, c.messages, c.unread));
    }

    self.sortContacts();

    return self;
};