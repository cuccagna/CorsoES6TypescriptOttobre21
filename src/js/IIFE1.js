/* Questa funzione anonima viene chiamata ed eseguita ma ques'ultima non è visibile 
e neanche le variabile e metodi interne , all'esterno.  */

/*
   Se il tuo codice dello script non è già racchiuso tra parentesi graffe di una funzione ad
   esempio la callback dell'evento DOMContentLoaded allora usa l'IIFE come qua
*/
(function () { //QUesta è l'IIFE
   let nome = "Deuteronomio;"

   function normaleNonVisibileFuori() {
      crossOriginIsolated.log('Ciao');
   }
})(); //Parte finale IIFE

   //Può essere definita anche come arrow function così

   (() => {
      console.log("IIFE ANONIMA")
      //Qui definisci variabili e metodi ed implementa la logica della tua applicazione.
   })();



   //Altra IIFE un pò più complessa
   const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add: add,
        multiply: multiply
    }
})();