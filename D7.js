/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatena(stringa1, stringa2) {
  if (stringa1.length < 2 || stringa2.length < 3) {
    // qui verifico se le stringhe che sto specificando sono abbastanza lunghe
    console.log("la tringa è troppo corta."); // nel caso non lo siano verrà stampato questo
    return;
  }

  let primaParte = stringa1.substring(0, 2); // con substring prende dalla lettera 0 alla lettera 2 della prima stringa

  let secondaParte = stringa2.substring(stringa2.length - 3); // con substring e all'interno length - 3 prenderà partendo dal fondo 3 lettere

  let risultato = primaParte + secondaParte; // qui uniamo le due stringhe per formare una nuova stringa con le prime due lettere della prima stringa e le ultime 3 della secondo stringa

  risultato = risultato.toUpperCase(); // qui stiamo dicendo di far diventare il risultato tutto in maiuscolo

  console.log(risultato); // e come risultato abbiamo "ALOMO"
}
concatena("Aldo", "Giacomo");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function randomArray() {
  let arrayCasuale = []; // qui stiamo creando un array vuoto
  for (
    let index = 0;
    index < 10;
    index++ // qui stiamo dicendo all'indice di fermarsi quando arriveremo a meno di 10 ovvero 9
  ) {
    let numeroCasuale = Math.floor(Math.random() * 101); // qui stiamo dicendo che il numero casuale è uguale a math.random che genera un numero fra 0 e 1 ma che non sarà mai uno il
    //---------------------------------------------------- il valore massimo sarà 0.999 quindi mai 1 e il risultato lo moltiplicheremo per 101 cosi da avere un valore fra 0.999 a 100.999
    //---------------------------------------------------- e con mathfloor lui trasformera i numeri decipani in interi per difetto quindi anche 100.999 sarà 100
    arrayCasuale.push(numeroCasuale); // qui andiamo a pushare i numeri all'interno dell'array fino a che non arriviamo a 10 elementi
  }
  return arrayCasuale;
}

console.log(randomArray());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici

*/

function filtraNumeriPari(arrayNumeriEs3) {
  const numeriPari = arrayNumeriEs3.filter(function (
    numero // il filter è un nuovo array con non modifica quello originale
    // ---------------------------------------------------------- e solo se gli elementi per cui la funzione di callback ritorna true saranno in clusi nel nuovo array
  ) {
    return numero % 2 === 0; // qui verifico se il numero è pari
  });
  return numeriPari;
}

const arrayDiNumeriEs3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPari = filtraNumeriPari(arrayDiNumeriEs3);
console.log(numeriPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArrayNumeri(arrayNumeriEs4) {
  let somma = 0; // qui stiamo dando come valore alla somma iniziale 0

  arrayNumeriEs4.forEach(function (
    numero // a differenza di map e filter foreach non creà un nuovo array ma esegue soltanto il compito e lo eseguira per ogni numero
  ) {
    somma += numero; // qui stiamo sommando i numeri prendendoli uno per uno
  });
  return somma;
}

const arrayDiNumeriEs4 = [5, 7, 2, 4, 9];
const sommaTotaleEs4 = sommaArrayNumeri(arrayDiNumeriEs4);
console.log(sommaTotaleEs4);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArrayNumeri(arrayNumeriEs5) {
  const somma = arrayNumeriEs5.reduce((acc, numero) => acc + numero, 0); // qui reduce ha il compito di ridurre l'array in un singolo elemento, acc a come valore 0 aggiungo il numero a acc
  // --------------------------------------------------------------------- e per ogni nuovo numero aggiorneraà acc affiungendoci il numero
  // --------------------------------------------------------------------- 0 è l'initial value ovvero il valore iniziale
  return somma;
}

// const add = function(a, b) {return a + b;};sarebbe come scrivere const acc = (a, b) => a + b;

const arrayDiNumeriEs5 = [3, 7, 4, 2, 8];
const sommaTotaleEs5 = sommaArrayNumeri(arrayDiNumeriEs5);
console.log(sommaTotaleEs5);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incrementaArrayNumeri(arrayNumeriEs6, n) {
  const arrayIncrementato = arrayNumeriEs6.map(function (
    numero // il .map serve per creare un nuovo array e non modificare quello originale
  ) {
    return numero + n; // qui aggiungamo il numero ad n
  });
  return arrayIncrementato;
}

const arrayDiNumeriEs6 = [7, 3, 9, 6, 1];
const n = 3;
const arrayIncrementato = incrementaArrayNumeri(arrayDiNumeriEs6, n);
console.log(arrayIncrementato);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function trovaLunghezza(arrayOfStrings) {
  return arrayOfStrings.map((string) => string.length);
}

const words = ["EPICODE", "is", "great"];
const lengths = trovaLunghezza(words);
console.log(lengths);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
