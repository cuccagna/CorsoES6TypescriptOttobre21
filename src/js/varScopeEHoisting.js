function miaFunzioneHoisting() {

   /* Stampa undefined perchè equivale a
   var x;
   x = 3; */
   console.log("x = ",x); //stampa undefined

   var x = 3;
   console.log("x = ",x);//stampa 3
}


miaFunzioneHoisting();

//console.log(x);
//Questa da errore qui x non è visibile

miaFunzione2();

function miaFunzione2() {
   

   {
      var pippo = 34;
   }

   console.log("pippo = ",pippo);
}

for (var i = 0; i < 5; i++)
   ;

console.log("i = ",i); //i è visibile anche qui