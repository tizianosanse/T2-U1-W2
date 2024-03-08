/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/ pets.push(pets.shift(0));
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars[0].licensePlate = "AA016";
cars[1].licensePlate = "AA056";
cars[2].licensePlate = "AA077";
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Fiat",
  model: "Punto",
  color: "Whitee",
  trims: ["life", "style"],
  licensePlate: "AA033",
};
cars.push(newCar);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
  console.log(cars);
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.slice(0, 1).join(""));
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  cars[i].color;
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  i++;
  const element = numericArray[i - 1];

  console.log(element);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const arraySorted = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i].toLowerCase()) {
    case "a":
      arraySorted.push(1);
      break;
    case "b":
      arraySorted.push(2);
      break;
    case "c":
      arraySorted.push(3);
      break;
    case "d":
      arraySorted.push(4);
      break;
    case "e":
      arraySorted.push(5);
      break;
    case "f":
      arraySorted.push(6);
      break;
    case "g":
      arraySorted.push(7);
      break;
    case "h":
      arraySorted.push(8);
      break;
    case "i":
      arraySorted.push(9);
      break;
    case "l":
      arraySorted.push(10);
      break;
    case "m":
      arraySorted.push(11);
      break;
    case "n":
      arraySorted.push(12);
      break;
    case "o":
      arraySorted.push(13);
      break;
    case "p":
      arraySorted.push(14);
      break;
    case "q":
      arraySorted.push(15);
      break;
    case "r":
      arraySorted.push(16);
      break;
    case "s":
      arraySorted.push(17);
      break;
    case "t":
      arraySorted.push(18);
    case "u":
      arraySorted.push(19);
      break;
    case "v":
      arraySorted.push(20);
      break;
    case "z":
      arraySorted.push(21);
      break;
  }
}
console.log(arraySorted);
