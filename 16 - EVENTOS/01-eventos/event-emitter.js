const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('message', (name)=>{
    console.log(`Hola ${name}`);
})

emitter.emit('message', 'Ana')