'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms, // - сюда передается ответ на первый вопрос
    movies: {}, // - в это свойство поместить пустой объект
    actors: {}, // - тоже поместить пустой объект
    genres: [], // - сюда поместить пустой массив
    privat: false // в это свойство поместить boolean(логическое) значение false
};

function rememberMyFilms() {
    let i = 0;

    while (i < 2) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            personalMovieDB.movies[a] = b;
            i++;
        
                if (a != '' && b != '' && a  != null && b  != null && a.length < 50 && b.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('Ok!');
                }
        
                else {
                    console.log('error');
                    i--;
                }        
    }
}

// rememberMyFilms();

function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}

// detectPersonalLvl();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();

console.log(personalMovieDB.genres);
