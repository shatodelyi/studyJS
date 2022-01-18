'use strict';

const arr = [2, 13, 26, 8, 10];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
console.log(arr.sort());
console.log(arr.sort(compareNum));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function compareNum(a, b) {
    return a - b;
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// arr.forEach(function(i, item, arr) {
//     console.log(`${item}: ${i} inside array ${arr}`);
// });

// arr.pop();
// console.log(arr);

// arr.push(12);
// console.log(arr);

//shift, unshift

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) { //может использовать break/continue
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(',');

// console.log(products);
// console.log(products.join(';'));

//Псевдомассив(массив без методов)