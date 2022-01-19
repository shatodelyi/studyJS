'use strict';

const personalMovieDB = {
    count: 0, // - сюда передается ответ на первый вопрос
    movies: {}, // - в это свойство поместить пустой объект
    actors: {}, // - тоже поместить пустой объект
    genres: [], // - сюда поместить пустой массив
    privat: false, // в это свойство поместить boolean(логическое) значение false
    start: function start () {        
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLvl: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < /*4*/2; i++) {            
            // let genre = prompt(`Ваш лбимый жанр под номером ${i}`);

            // if (genre == '' || genre == null) {
            //     console.log('error');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i-1] = genre;
            // }

            let genres = prompt(`Жанры через запятую`).toLocaleLowerCase();

            if (genres == '' || genres == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLvl();
// personalMovieDB.writeYourGenres();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();