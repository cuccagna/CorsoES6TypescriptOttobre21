
//ERRORE, NO INIZIALIZZAZIONE
//const x;

/* Javascript ha i tipi primitivi e i reference values che sono oggetti in pratica.Ad esempio
{
   "nome": "Nicola",
      1:   "Valore"
}

è un oggetto definito con la sintassi chiave-valore */

const x = {
   "nome": "Nicola",
   1: "Valore"
};

//NON LECITO con CONST
//x = null;

x.nome = "Nicolas";
console.log(x);

const anotherConstObject = Object.freeze({
   "cognome": "Bianchi",
   "macchine": 10
});

anotherConstObject.cognome = "Brambilla"; //Questa istruzione non da errore ma non sarà eseguita
console.log(anotherConstObject);

//MA ATTENZIONE INFATTI
const yetanotherConstObject = Object.freeze({
   "cognome": {colore:"magenta",marca:"BMW"},
   "macchine": 10
});

//CIOE' NON PUOI MODIFICARE cognome, ma il refernce value dentro cognome SI
//Dovresti tipo fare delle chiamate ricorsive per risolvere
yetanotherConstObject.cognome.colore = "red";
console.log(yetanotherConstObject);