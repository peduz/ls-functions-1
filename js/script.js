

function hello(nome) {
    console.log("Hello " + nome)

    return "Hello " + nome;
}

hello("Giuseppe");
hello("Marco");
hello("Giulio");

function somma(num1, num2) {
    return num1 + num2;
}

let somma1 = somma(3, 5, 6)
let somma2 = somma(13, 15)
let somma3 = somma(15, 18)
let somma4 = somma(12334535, 23324)
let somma5 = somma(-2343, -125)
let somma6 = somma(3234, 12125)

let num1 = 5;
let num2 = 120;
let somma7 = somma(num1, num2)

let arg1 = 10;
let arg2 = 1;

let somma8 = somma(arg1, arg2)

function divisione(num1, num2) {
    return num2/num1;
}


let d1 = divisione(10, 5)

function stampaInfoPersonali(nome, eta, isSposato, citta) {
    let result = "Sono " + nome + ", ho " + eta;
    if(isSposato) {
        result += " sono sposato "
    } else {
        result += " non sono sposato "
    }

    result += "e vivo a " + citta;

    return result;
}

console.log(stampaInfoPersonali(34, "Giuseppe", "Grottammare", true))// -> da un output sbagliato
console.log(stampaInfoPersonali("Giuseppe", 34, true, "Grottammare"))// -> da un output giusto


function checkEta(eta) {
    if(eta < 18) {
        return ;
    }

    let s = "Sei maggiorenne, puoi bere qualcosa"
    return s;
}

console.log(checkEta(1))


let num3 = 10;
function funzione1(num1, num2) {
    const risultatoInterno = num1 * num2 / (num1 - num2) + num3


    if(risultatoInterno > 10) {
        let num12 = 1;
        risultatoInterno - num12;
    }

//    console.log(num12) -> ReferenceError 
    return risultatoInterno;
}

//console.log(risultatoInterno) -> ReferenceError


/*
Scriviamo una funzione che accetta 1 parametro di tipo stringa (una parola)
e ne ritorna una versione con la prima lettera maiuscola
es: function capitalizeWord(word)
capitalizeWord("antonio") -> "Antonio"
*/
function capitalizeWord(word) {
    //1) devo fare in modo di prendere la prima lettera
    //2) metto la prima lettera in una variabile
    let firstLetter = word.charAt(0);
    //3) converto la prima lettera (punto 2) in maiuscolo (toUpperCase())
    firstLetter = firstLetter.toUpperCase();
    //4) facciamo un'altra variabile per prendere il resto della parola
    let restOfWord = word.substring(1);
    //5) concateniamo la prima lettera e il resto della parola in una variabile
    let capitalizedWord = firstLetter + restOfWord;
    //6) ritorniamo la nuova variabile
    return capitalizedWord;
}
console.log(capitalizeWord("antonio") == "Antonio");

console.log(capitalizeWord("spesa"))
console.log(capitalizeWord("arancia"))
console.log(capitalizeWord("latte"))
console.log(capitalizeWord("marco"))

console.log(capitalizeText("saluta andonio"))

function capitalizeText(text) {
    //0) inizializzare il contenuto delle singole parole
    let capitalizedWords = [];
    //1) suddividere le parole
    const words = text.split(" ");
    //2) ciclare sulle parole suddivise
    for(let i = 0; i < words.length; i++) {
        //3) utilizzare capitalizeWord su ciascuna parola
        let wordCapitalized = capitalizeWord(words[i])
        //4) aggiungere ciascuna parola all'array di risultato
        capitalizedWords.push(wordCapitalized)
    }
    //5) riaggregare il testo in una variabile
    let result = capitalizedWords.join(" ");
    //6) restituire il risultato
    return result;
}

console.log(capitalizeText("sono giuseppe"))