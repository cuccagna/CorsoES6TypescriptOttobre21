//FUNZIONI IN JS SONO OGGETTI. Istanze di Function per esattezza
/* Function è l'oggetto costruttore. Le funzioni hanno un puntatore
a nomeFunzione.prototype che a sua volta punta a Object.prototype.
 Come tali hanno proprietà e metodi. Alcuni metodi sono call,apply e bind */
//Una di queste è prototype

//FUNZIONI IN JS SONO OGGETTI
console.log(funzioneEsempio instanceof Function);
console.log(funzioneEsempio instanceof Object);
//MODI PER DICHIARARE UNA FUNZIONE

//1 FUNCTION DECLARATION
function funzioneEsempio(param1) {
   console.log('Ciao')
}

//2 FUNCTION CONSTRUCTOR  (NON USARE MAI, NON E'EFFICIENTE)

//Equivalente a fare
//let funzioneEsempio = new Function("param1","console.log('Ciao')")


//3 FUNCTION EXPRESSION

/* 
let funzioneEsempio = function (param1) {
   console.log('Ciao');
}

Chiamamibile con funzioneEsempio() 

La differenza rispetto a function declaration è che non avviene l'hoisting con function expression
anche se usi var (cioè la variabile var funzioneEsempio verrebbe sempre hoisted ma con valore undefined,
   cioè la funzione non verrebbe più hoisted)
*/


//Altri modi per dichiarare una funzione