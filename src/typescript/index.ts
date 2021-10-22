//tipi standard

var firstName:string = "Antonio"
var lastName:string =  "Giannasca"
var height:number = 6
var isDone:boolean = false

console.log(isDone)

//array
var Numbers: number[] = [1,2,3]
var names: Array<string> = ['Antonio', 'giovanni', 'Giuseppe']

//tipo any (tipo generico - di solito si usa per gli oggetti oppure per strutture complesse
//- stream JSON - quando non siamo sicuri del tipo restituito)

var x:any = {'id': 3, 'name': 'antonio'}

//Le funzioni: definizione e richiamo

function test(){
    for(let i=0; i<10;i++){
        console.log(i)
    }
}

test()

/////////////////////