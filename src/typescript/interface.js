var Impiegato = /** @class */ (function () {
    //altre proprietà o metodi
    function Impiegato(code, name) {
        this.empoCode = code;
        this.name = name;
    }
    return Impiegato;
}()); //Fine class
//istanza della classe
var emp = new Impiegato(1, "Antonio");
console.log(emp);
