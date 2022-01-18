'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // ссылка на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNum = copy(numbers);

newNum.a = 10;
newNum.c.x = 10;

// console.log(numbers);
// console.log(newNum);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers,add));
const clone = Object.assign({},add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();//копирует массив

newArr[1] = 'qwe';
// console.log(newArr);
// console.log(oldArr);

//spread оператор

const video = ['yt', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);