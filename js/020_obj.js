'use strict';

const options = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

/*
console.log(options.name);

delete options.name;

console.log(options);
*/

//Деструктуризация

const {border, bg} = options.colors;
console.log(border);

//_______________________________________________



// console.log(options['colors']['border']);

/*

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);
*/

console.log(Object.keys(options).length);
