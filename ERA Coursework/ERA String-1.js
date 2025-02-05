let date = "December 13, 2024";
let space = date.indexOf(" ");
let comma = date.lastIndexOf(",");
const month = date.slice(0, space); // "December"
const day = date.slice(space+1, comma); // "13"
const year = date.slice(comma+2); // "2024"
console.log(`The month today is ${month}.  The day today is ${day}.  The year today is ${year}.`)

