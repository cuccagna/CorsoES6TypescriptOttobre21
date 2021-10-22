/*
Tipo ENUM: rappresenta un insieme non associato a proprietà ma soltanto ad una collezione di valori,
anche di tipo diverso, che può essere indicizzata - di solito l'indice parte da 0 
ma che è possibile inizializzare diversamente- 
*/

enum Color{
    Red,
    Green,
    Blue
}


//Utilizzo
let colorName: string = Color[2]
console.log(colorName) // Blue