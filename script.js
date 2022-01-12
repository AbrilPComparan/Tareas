// Practica realizada con FELIPE 
/*Esta es una alerta
alert("Este un comentario");

console.log("Este es un msj para consola");

let nombre = "Abril";
let apellido = "Comparan";
let edad = 24;

console.log(nombre , apellido , edad);
alert("Mi nombre es " + nombre);

console.log("Mi apellido es " + apellido);

//Otro ejemplo de mostrar variables en consola 

let numero =5;
let numero2 =7;
let result = numero-numero2;
console.log("El resultado de la suma es "+result);

//Sintaxis basica de una función
function nombreFuncion(parametro) {

}


//DEclaramos funciones 

function saludar() {
    alert("Hola a Todos")
}
saludar ();

let cantar =function() {
    alert("A mi me gusta Cantar");
}
cantar ();

//funciones sin parametro

function sumar() {
    let numero1 = 5;
    let numero2 =6;
    let sumar = numero1+numero2;
    alert("La suma de la funcion sin parametros es: " + sumar);

}
sumar ();

function restar (num1,num2,resta){
    let num1 = 5;
    let num2 = 6;
    let resta= num1 - num2;
    alert("La resta de la funcion con parametros es: " + resta);

}
restar();

function cuadrado(cuadrado){
    let rescuadrado = cuadrado*cuadrado;
    alert("El cuadrado del numero es: "+ rescuadrado);
}
cuadrado(4);

function operaciones (num1,num2,num3,suma,resta,multi){
    let suma = num1 + num2 + num3;
    let resta = num1 - num2 - num3;
    let multi = num1 * num2 * num3;
    alert("La suma es: "+suma +", la resta es: "+resta +" y la multiplicacion es: "+multi);

}
operaciones(5,6,7);

function areaTriangulo(){
    let base = 2;
    let altura = 4;
    let resultado = (base*altura)/2;
    alert("El area del triangulo es: "+resultado);
}
areaTriangulo();

function areaCirculo (pi,radio,resultado) {
    pi = 3.1416;
    radio =5;
    resultado = pi * (radio*radio)
    alert ("El área del circulo es: " + resultado); 
}
areaCirculo();


function AreaRectangulo (base,altura,resultado){ 
    resultado = base*altura; 
    alert ("El área del rectangulo es: " + resultado);
} 
AreaRectangulo(5,8); 
*/

//Subir al repo como funciones 

function AreaTriangulo () { 
    var base = 2; 
    var altura = 4; 
    var resultado = (base * altura)/2; 
    alert ("El área del triangulo es: " + resultado); 
} 
AreaTriangulo (); 

function AreaCirculo (pi,radio,resultado) { 
    var pi = 3.1416; 
    var radio = 5; 
    var resultado = pi * (radio*radio); 
    alert ("El área del circulo es: " + resultado); 
} AreaCirculo (); 

function AreaRectangulo (base,altura,resultado){ 
    var resultado = base*altura; 
    alert ("El área del rectangulo es: " + resultado); } 
    AreaRectangulo(5,8); 


/*
function prompter(){ 
    let respuesta = prompt("Buenos dias, Cual es tu nombre");
    alert("Es un gusto saludarte " + respuesta);
}
prompter();

function areaCuadrado(){ 
    let datoIngresado = prompt("Ingresa un numero");
    let resultado = datoIngresado*datoIngresado;
    alert("El area del cuadrado es "+ resultado + " porque el numero que ingresaste es " +datoIngresado);
}
areaCuadrado();
*/

function confirmacion() {
    let pregunta = confirm("Deseas visitar Google.com y buscar fotos de perritos?")
if(pregunta){
    alert("Te enviare rapidamente")
    window.location = "https:www.google.com";
}
else{
    alert("No hay problema, nos vemos luego")

}
}

function cambiarColor(nuevoColor){
    let elem = document.getElementById("parrafo");
    elem.style.color = nuevoColor;
}
function Accion(Tipo) {
    var elem = document.getElementById("DivBotones");
    if (Tipo == "Ocultar")
        elem.style.display = 'none';
    else elem.style.display = '';
}