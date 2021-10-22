/*
Tipo ENUM: rappresenta un insieme non associato a proprietà ma soltanto ad una collezione di valori,
anche di tipo diverso, che può essere indicizzata - di solito l'indice parte da 0
ma che è possibile inizializzare diversamente-
*/
var Color;
(function (Color) { //funzione immediatamente eseguibile
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//Utilizzo
var colorName = Color[2];
console.log(colorName); // Blue
