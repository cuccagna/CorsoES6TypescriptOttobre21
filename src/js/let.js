//No HOISTING console.log(x);  qui da errore
let x=3;
console.log(window.x); //torna undefined

//DIchiararla di nuovo da errore
//let x = 5;

for (let i = 0; i < 5; i++)
   console.log(i);

//SCOPE A LIVELLO DI BLOCCO,  i fuori dal for non esiste. Stamparla da errore
//console.log(i);

//TIPICO CODICE PROPOSTO NEI COLLOQUI
/* Questo codice ha una setTimeout che è asincrona cioè è eseguita dopo il codice sincrono(il resto del codice qui).
   Passati 1000ms cuiè 1 secondo può essere eseguita.Ma a quel punto il ciclo for ha terminato l'esecuzione
essendo codice sincrono e quindi le 5 funzioni della setTimeout eseguite dopo almeno 1 secondo
troveranno il valore di k a 5 e stamperanno 5 tutte.
Tutte e 5 le funzioni chiamate dalla setTimeout sono associate alla stessa variabile k
*/
for (var k = 0; k < 5; k++){
   setTimeout(function(){document.getElementById("container1").appendChild(document.createTextNode(k+" "))},1000);
}



//SOLUZIONE CON let
//Dietro le quinte accade un fresh binding, cioè se il valore di let viene modificato un nuovo
//scope lessicale viene creato e ogni funzione delle 5 setTimeout saranno associate a 5
//diverse variabili.
//Verrano stampati valori da 0 a 4
for (let j = 0; j < 5; j++){
   setTimeout(function(){document.getElementById("container2").appendChild(document.createTextNode(j+" "))},1000);
}