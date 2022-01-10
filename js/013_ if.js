'use strict';

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 26;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('to much');
// } else {
//     console.log('ok');
// }

// (num == 50) ? console.log('ok'): console.log('error'); // ? - тернарный


switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('next time');
        break;
}

