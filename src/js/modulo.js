import {Persona} from './classi/Persona.js';
import {Docente} from './classi/Docente.js';
import {Presidente} from './classi/Presidente.js';


const p1 = new Persona('Mario','Rossi');
const pr1 = new Presidente('Giuseppe','Conte');
console.log(p1);

pr1.emanaDPCM();