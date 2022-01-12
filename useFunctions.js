
//Ejercicio dia 12 de Enero 2021
//https://github.com/generation-org/JS/blob/master/JS-02%20-%20Declare%20and%20Use%20Functions/README.md


//Exercise #1
(() =>{
    let num_transacciones = prompt("Indica el numero de transacciones");
    trasanccion(num_transacciones);
})();

function trasanccion(num_transacciones){
    var transacciones = null;
    var total = null; 
    transacciones = num_transacciones*3;
    console.log(transacciones);
    for(let i = 0; i<num_transacciones;i++){
        let pagos = prompt(`Ingresa el monto de la transaccion`);
        total = Number(total)+Number(pagos);
        console.log(total)
    }
    total += transacciones;
    total = total+(total*0.01);
    alert(`El total de a pagar es: ${total} dolares`);
}

//Exercise #2.1
var amx1 = prompt("Ingresa tu nombre persona 1 ");
var amx2 = prompt ("Ingresa tu nombre persona 2");
var amx3 = prompt ("Ingresa tu nombre persona 3");

function amigos(amx1,amx2,amx3){
    
alert("Bienvenido "  + amx1 + amx2 + amx3 );
}
amigos (amx1,amx2,amx3);



//Exercise #2.2
var year = prompt("Ingresa tu año de nacimiento ");
var now = 2022;

function birth(num1,num2)
{
    var res = num2-num1;
    alert("Tu edad es "+ res)
}
birth(year,now);


//Exercise #2.3
var amx1 = prompt("Ingresa tu nombre persona 1 ");
var edad1 = prompt("Ingresa tu edad persona 1");
var amx2 = prompt ("Ingresa tu nombre persona 2");
var edad2 = prompt ("Ingresa tu edad persona 2");
var amx3 = prompt ("Ingresa tu nombre persona 3");
var edad3 = prompt ("Ingresa tu edad persona 3");

function amigos(amx1,amx2,amx3, edad1, edad2, edad3){
    
alert("Bienvenido "  + amx1 +" Tu edad es " + edad1 + " Bienvenido "  + amx2 +" Tu edad es " + edad2 + " Bienvenido "  + amx3 +" Tu edad es " + edad3 );
}
amigos (amx1,amx2,amx3, edad1, edad2, edad3);



//Challenge Yourself
function approve (cali){
    var cali = parseInt(prompt("Ingresa tu calificación "));
    if (cali >= 5 && cali <= 8 ) {
        alert("Tu status es " + true);
        }
         else if (cali > 8 && cali <=10) {
        alert("Tu status es Excelet");
         } 
         else if (cali == 11) {
            alert("Tu status es Perfec! :)");
                }
        else if (cali > 11) {
        alert("Ingresa una calificacion valida");
            }
       else{
        alert("Tu status es " + false);
             }
        }   
approve();









