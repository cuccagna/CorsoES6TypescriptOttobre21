window.addEventListener("load", DomERisorseCaricate);

function DomERisorseCaricate() {
   console.log("Evento load si è verificato");
   var formCliente = document.forms[0];

   formCliente.addEventListener("submit", gestisciInserimentoCliente);
}

function gestisciInserimentoCliente(evento) {
   evento.preventDefault();
   //console.log("Ciao");
   //Nel listener this referenzia l'oggetto cui è attaccato il listener cioè il form in questo caso
   //elements è una proprieta dei form che tramite l'attributo dell'elemento del form torna quell elemento
   //Tramite la proprietà value dell'elemento torno il valore inserito che viene tornato sempre come
   //stringa
   var nome = this.elements["nome"].value;
   var cognome = this.elements["cognome"].value;
   var squadrePreferite = this.elements["squadraPreferita"];

   if (isValidated(nome, cognome, squadrePreferite)) {
      //cancella errore
      //document.querySelector("div.erroreForm").style.display = "none";
      document.querySelector("div.erroreForm").classList.remove('erroreFormVisualizza');
      creaCardCliente(nome, cognome, squadrePreferite);
   }
   else {
         //visualizza errore
         //document.querySelector("div.erroreForm").style.display = "block";
         document.querySelector("div.erroreForm").classList.add('erroreFormVisualizza');
   }

   //console.log(squadrePreferite);
}

function isValidated(nome, cognome, squadrePreferite) {

   return isValideNome(nome) && isValideCognome(cognome) && isValideSquadrePreferite(squadrePreferite);
}

function isValideNome(nome) {
   //Qualunque carattere tranne un numero uno o più volte
   let patternNome = /^[^0-9]+$/;
   if (nome === "" || !patternNome.test(nome))
      return false;
   
   return true;
}

function isValideCognome(cognome) {
   let patternCognome = /^[^0-9]+$/;
   if (cognome === "" || !patternCognome.test(cognome))
      return false;
   
   return true;
}

//Valido se ne hai scelta almeno una
function isValideSquadrePreferite(squadrePreferite) {
   //console.log(squadrePreferite);
   //console.log(squadrePreferite[0].checked);

   /* for (var i = 0; i < squadrePreferite.length; i++){
      if (squadrePreferite[i].checked)
         return true;
   } */

   for (var squadra of squadrePreferite) {
      if (squadra.checked)
         return true;
   }

   return false;
}

function creaCardCliente(nome, cognome, squadreScelte) {
   var squadrePreferite = [];
   squadreScelte.forEach(function (item, index) {
      if(item.checked)
         squadrePreferite.push(item.value);
   });

   //console.log(squadrePreferite);
   var newDiv = document.createElement("div");
   newDiv.className = "card";
   var contenutoCard = "<h2 style='margin-bottom:0.1em;'>Cliente:</h2> " + nome + " " + cognome + "<h3>Squadre preferite:</h3>";
   for (var squadra of squadrePreferite)
      contenutoCard += "<div>" + squadra + "</div>";
   
   newDiv.innerHTML = contenutoCard;
   document.body.appendChild(newDiv);
}




