let numberOfFilms;

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
};

function start() {
  numberOfFilms = prompt("Сколько фильмов уже посмотрели?");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов уже посмотрели?");
  }
}

start();
let oneLast;
let value;
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    oneLast = prompt("Один из просмотренных последних фильмов?");
    value = prompt("На сколько оценете его?");

    if (
      oneLast != "" &&
      value != "" &&
      oneLast != null &&
      value != null &&
      oneLast.length < 50
    ) {
      personalMovieDB[oneLast] = value;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотренно слишком мало фильмов");
      } else if (personalMovieDB.count > 10 || personalMovieDB.count < 30) {
        console.log("вы классический зритель");
      } else if (personalMovieDB.count > 30) {
        console.log("вы киноман");
      } else {
        console.log("произошла ошибка");
      }
}

detectPersonaLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let lovelygenre = prompt(`Ваш любимый жанр ${i}`);
        personalMovieDB.genres[i - 1] = lovelygenre;
    }
}


writeYourGenres();

const options = {
  actors: 2345,
  genres: 456,
  private: 4545,
};

for (let key of options) {
  console.log(`${key} hi ${options[keys]}`);
}

