import { Persona } from "./Persona.js";

export class Docente extends Persona{
   constructor(nome,cognome,materie){
      super(nome,cognome);

      this.materie = materie || null;
   }
}