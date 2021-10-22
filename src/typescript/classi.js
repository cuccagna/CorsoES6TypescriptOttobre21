var Persona = /** @class */ (function () {
    function Persona(nome, cognome, eta) {
        this.nome = "Mario";
        this.cognome = "Draghi";
        this.setNome(nome);
        this.setCognome(cognome);
        this.setEta(eta);
    }
    Persona.prototype.setNome = function (nome) {
        if (nome.length < 50)
            this.nome = nome;
    };
    Persona.prototype.getNome = function () {
        return this.nome;
    };
    Persona.prototype.setCognome = function (cognome) {
        if (cognome.length < 50)
            this.cognome = cognome;
    };
    Persona.prototype.getCognome = function () {
        return this.cognome;
    };
    Persona.prototype.setEta = function (eta) {
        if (eta > 0)
            this.eta = eta;
    };
    Persona.prototype.getEta = function () {
        return this.eta;
    };
    Persona.prototype.infoPersona = function () {
        return this.getNome() + " " + this.getCognome() + " di anni " + this.getEta();
    };
    return Persona;
}());
var persona1 = new Persona("Maria", "Stella", 30);
console.log(persona1.infoPersona());
