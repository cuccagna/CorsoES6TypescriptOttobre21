let x = {
    nome: "Antonio",
    cognome:"Giannasca",
    eta:35
}

let values=[];
for(let pr in x){
    values.push(x[pr]);
}

let values2 = Object.values(x);
console.log(values);
console.log(values2);

let prop = Object.keys(x);
console.log(prop);

let s = "12345";

for(let char of s)
    console.log(char);

    let myArray = new Array(3,4,5);
    myArray2=[3,4,5];
    myArray[3] = 5;
    console.log(myArray);

    myArray.length = 10;

    console.log(myArray);

    myArrayNew = [4,6,7,8,9];

    let esito = myArrayNew.every((item)=>item%2 === 0);
    console.log(esito);

    let esitoSome = myArrayNew.some((item)=>item%2 === 0);
    console.log(esitoSome);

    Boolean();
    Number()
    String()

    let mys = Symbol();

    let myObj = {nome:"Nicola"};
    myObj.id = Symbol();

    let oggettoEsterno={};
    let xS = Symbol()
    oggettoEsterno[xS] = "Nicola";

    23A
    newRegExp = /^[0-9]+$/;
    newRegExp.test()
    parseInt("23");

    /* let result = num !== "" && Number(num);
    if(Number.isFinite(result){

    }
    else */

    let myObj = {nome:"pippo",eta:35};
    //let nomeOgg = myObj.nome;
    let {nome: nomeOgg} = myObj;