
var dato1 = false;
var dato2 = true;
var dato3 = 0;

console.log(Number(dato1));
console.log(String(dato1));
console.log(Boolean(dato1));

console.log(Number(dato2));
console.log(String(dato2));
console.log(Boolean(dato2));

console.log(Number(dato3));
console.log(String(dato3));
console.log(Boolean(dato3));

var dato4 = 1;
var dato5 = "0";
var dato6 = "000";

console.log(Number(dato4));
console.log(String(dato4));
console.log(Boolean(dato4));

console.log(Number(dato5));
console.log(String(dato5));
console.log(Boolean(dato5));

console.log(Number(dato6));
console.log(String(dato6));
console.log(Boolean(dato6));

var dato7 = "1";
var dato8 = NaN;
var dato9 = Infinity;

/* convert to number()  string()  boolean() */
console.log( Number(dato7));
console.log(String(dato7));
console.log(Boolean(dato7));

console.log( Number(dato8));
console.log(String(dato8));
console.log(Boolean(dato8));

console.log( Number(dato9));
console.log(String(dato9));
console.log(Boolean(dato9));

var dato10 = -Infinity;
var dato11 = "";
var dato12 = "20";

console.log(Number(dato10));
console.log(String(dato10));
console.log(Boolean(dato10));

console.log(Number(dato11));
console.log(String(dato11));
console.log(Boolean(dato11));

console.log(Number(dato12));
console.log(String(dato12));
console.log(Boolean(dato12));

var dato13 = "Twenty";
console.log(dato13);
console.log(typeof(dato13));
console.log("Number()-----------------------");
console.log(Number(dato13));
console.log("Tipo " + typeof(Number(dato13)));
console.log("String()-----------------------");
console.log(String(dato13));
console.log("Tipo " + typeof(String(dato13)));
console.log("Bolean()-----------------------");
console.log(Boolean(dato13));
console.log("Tipo " + typeof(Boolean(dato13)));

var dato14 = null;
console.log(dato14);
console.log(typeof(dato14));
console.log("Number()-----------------------");
console.log(Number(dato14));
console.log("Tipo " + typeof(Number(dato14)));
console.log("String()-----------------------");
console.log(String(dato14));
console.log("Tipo " + typeof(String(dato14)));
console.log("Bolean()-----------------------");
console.log(Boolean(dato14));
console.log("Tipo " + typeof(Boolean(dato14)));

var dato15;
console.log(dato15);
console.log(typeof(dato15));
console.log("Number()-----------------------");
console.log(Number(dato15));
console.log("Tipo " + typeof(Number(dato15)));
console.log("String()-----------------------");
console.log(String(dato15));
console.log("Tipo " + typeof(String(dato15)));
console.log("Bolean()-----------------------");
console.log(Boolean(dato15));
console.log("Tipo " + typeof(Boolean(dato15)));

// Part 2
// Challenge 1:
var year = 1997;
var newYear = 2022;

function age(num1,num2){
    var res = num2-num1;
    console.log(res);
}

age(year,newYear);

// Challenge 2:
var person = {
    name: "Abril Compara",
    location: "Guadalajara",
    hobby: "Reading",
}
console.log("Hi, my name is " + person.name + ". I live in " + person.location + " and enjoy " + person.hobby + ".");
