/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        user: {
            name: 'Annalisa Cecchini',
            avatar: '_ac'
        },
        newMessages: '', 
        indexContact: 0,
        searchInput: '',
        contacts: [
            {
                name: 'Gustav Purpleson',
                avatar: '_1',
                visible: true,
                lastOnline:'10/01 16:15',
                messages: [
                    {
                        date: '10/01/2021 15:30:55',
                        message: 'Hi Gustav, have you already informed Silvia about tomorrow\'s meeting?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        message: 'I sent her an invitation on Zoom',
                        status: 'received'
                    },
                    {
                        date: '10/01/2021 16:15:22',
                        message: 'Perfect, then see you tomorrow!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Jane Doe',
                avatar: '_2',
                visible: true,
                lastOnline:'20/03 16:35',
                messages: [
                    {
                        date: '20/12/2020 16:30:00',
                        message: 'Hi Jane, have you talked to the client yet?',
                        status: 'sent'
                    },
                    {
                        date: '20/12/2020 16:30:55',
                        message: 'We made an appointment for tomorrow!',
                        status: 'received'
                    },
                    {
                        date: '20/12/2020 16:35:00',
                        message: 'Let\'s update tomorrow then!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Sue Shei',
                avatar: '_3',
                visible: true,
                lastOnline: '28/03 16:15',
                messages: [
                    {
                        date: '28/10/2020 10:10:40',
                        message: 'I\'d love to learn react..',
                        status: 'received'
                    },
                    {
                        date: '28/10/2020 10:20:10',
                        message: 'Fantastic, there is a new project in the making, which you can join!',
                        status: 'sent'
                    },
                    {
                        date: '28/10/2020 16:15:22',
                        message: 'Great, I start immediately then!!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Miles Tone',
                avatar: '_4',
                visible: true,
                lastOnline: '10/01 15:50', 
                messages: [
                    {
                        date: '10/09/2020 15:30:55',
                        message: 'I would like to evaluate an interesting proposal together',
                        status: 'received'
                    },
                    {
                        date: '10/09/2020 15:50:00',
                        message: 'Let\'s meet in half an hour and have coffee together',
                        status: 'sent'
                    }
                ],
            },
        ],
        

    },
    methods: {
        setContact(index) {
            this.indexContact = index;
        }, 
        addMessage(index) {
            if (this.newMessages.trim() !== '') {
                this.contacts[index].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.newMessages,
                    status: 'sent',
                });

                this.newMessages = '';
            }

            setTimeout(() => {
                this.contacts[index].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'Perfect! Let\'s do it now!',
                    status: 'received',
                });
                this.contacts[this.indexContact].lastOnline = dayjs().format('DD/MM HH:mm')

            }, 1000);
          
        },
        lookFor() {

            if (this.searchInput.trim() !== '' ) { 
                
                for (var i = 0; i < this.contacts.length; i++) {
                    
                    if (! this.contacts[i].name.trim().toLowerCase().includes(this.searchInput.trim().toLowerCase())) {
                        this.contacts[i].visible = false;
                    }
                    else {
                        this.contacts[i].visible = true;
                    };
                };
            }
            else if (this.searchInput == '') {

                for (var i = 0; i < this.contacts.length; i++) {
                    this.contacts[i].visible = true;
                };
            };
        },
    }
});