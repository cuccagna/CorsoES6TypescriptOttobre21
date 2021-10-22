export {};

class Persona{
    private nome: string ="Mario";
    private cognome:string= "Draghi";
    private eta:number;

    private static numPersone: number = 0;

    constructor(nome: string,cognome: string,eta:number){
        this.setNome(nome);
        this.setCognome(cognome);
        this.setEta(eta);

        Persona.numPersone++;
    }

    setNome(nome:string):void{
        if(nome.length < 50)
            this.nome = nome;
    }

    getNome(): string{
        return this.nome;
    }

    setCognome(cognome:string):void{
        if(cognome.length < 50)
            this.cognome = cognome;
    }

    getCognome(): string{
        return this.cognome;
    }

    setEta(eta:number):void{
        if(eta > 0)
            this.eta = eta;
    }

    getEta(): number{
        return this.eta;
        this.methodHelper();
    }

    infoPersona(): string{
        return `${this.getNome()} ${this.getCognome()} di anni ${this.getEta()}`
    }

    //Metodo privato chiamabile solo dall'interno della classe
    private methodHelper(){

    }

    static getnumPersone():number{
        return Persona.numPersone;
    }
}

let persona1 = new Persona("Maria","Stella",30);
let persona2 = new Persona("Gino","Cassaro",31);
console.log(persona1.infoPersona());
persona1.setEta(40);
console.log(Persona.getnumPersone());
//persona1.methodHelper();

