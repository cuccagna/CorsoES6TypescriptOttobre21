/* Al posto di una funzione esplicita si usa una funzione anonima

document.addEventListener("DOMContentLoaded", gestitiEventoDomLoaded);

function gestitiEventoDomLoaded(evento) {
   .
   .
   .
} */

document.addEventListener("DOMContentLoaded", function () {
   document.forms["cambiaSfondo"].addEventListener("submit", function (event) {
      event.preventDefault();
      const coloreSelezionato = this.elements["colore"].value;
      document.body.style.backgroundColor = coloreSelezionato;
   })
})