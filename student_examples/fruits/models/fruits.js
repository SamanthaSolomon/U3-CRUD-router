//create array of fruits, don't have to have a variable. Could just be module.exports = fruits
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

//must export like in react
module.exports = fruits;