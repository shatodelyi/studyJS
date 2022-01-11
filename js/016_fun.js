'use strict';

let num = 20;


// function declaration

function showFirstMess (text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMess('qwe');
console.log(num);


// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(+prompt('write a',''), +prompt('write b','')));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//function expression

const logger = function () {
    console.log('hello');
};

logger();

//стрелочне 
const calc = (a, b) => a + b;

console.log(calc(1, 3));