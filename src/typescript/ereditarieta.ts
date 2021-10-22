class Animal{
    jump(distanza:number){
        console.log(`L'animale salta ${distanza} metri`)
    }
   
}

//Estendiamo la classe Animal - ereditarietà

class Dog extends Animal{
    type = "Dog"
    name = "Pippo"
    abbaia(){
        console.log(`Bau bau`)
    }
}

const dog = new Dog()
dog.abbaia()
dog.jump(2)
console.log(`sono un ${dog.type}, mi chiamo ${dog.name}`)