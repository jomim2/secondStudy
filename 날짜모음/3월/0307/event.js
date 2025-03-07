const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log("이벤트 1");
});
myEvent.on('event2', () => {
    console.log('이벤트 2츄가');
})
myEvent.once('ev3', () => {
    console.log('이벤트3');
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('ev3');
myEvent.emit('ev3');

myEvent.on('event4', () => {
    console.log('이벤트 4');
})
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트 5')
}
myEvent.on('event5', listener);
myEvent.off('event5', listener);

myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));