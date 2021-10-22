var topolino = 3;
console.log("window.topolino = ", window.topolino);  //variabili con var si legano a window

myFunction();

//Da errore perchè non è hoisted
//console.log(isGlobale2);

function myFunction() {
   //Le variabili globalli siffatte non sono permesse in strict mode
   //"use strict";
   isGlobale = 4;
}

//Nonostante sia dichiarata nella funzione non essendoci var diventa globale una volta che
//la funzione in cui è contenuta viene chiamata
console.log("isGlobale = ", isGlobale);

isGlobale2 = "Marika";//non è hoisted
