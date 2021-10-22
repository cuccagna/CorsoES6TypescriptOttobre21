interface IEmployee{
    empoCode:number
    name:string
}

class Impiegato implements IEmployee{

    empoCode:number
    name:string
    //altre proprietà o metodi

    constructor(code:number, name:string){
        this.empoCode=code
        this.name = name
    }
}//Fine class

//istanza della classe

let emp = new Impiegato(1, "Antonio")
console.log(emp)



