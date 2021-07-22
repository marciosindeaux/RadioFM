const AbstractEvent = require('./AbstractEvent');

class StartEvent extends AbstractEvent {
    
    static doEvent(client) {
        client.user.setPresence({
            status:'online',
            activity:{ 
                name: 'Tentando não surtar 🤣🤣🤣🤣'
            }
        });
    }

}

module.exports = StartEvent;