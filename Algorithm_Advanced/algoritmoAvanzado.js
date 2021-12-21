//Ejercicio 1 
const numbers = [3, 5, 7, 1, 6];
    valor = numbers.sort(function(x,y){
        return y-x
        
        });
        console.log(valor[0]);

    //Ejercicio 2:
    valor = numbers.sort(function(x,y){
        return y-x
        
        });
        console.log(valor);
        
    //Ejercicio 3
    const numbers2 = [8, 12, 3, 5, 9];
        console.log(numbers2);
    //En este caso concatenamos los dos Arrays
        valores = numbers.concat(numbers2);
            console.log(valores);
    //Aqui se acomoda de mayor a menor e imprime el primer numero
        valores = valores.sort(function(x,y){
                return x-y
                
                });
                console.log(valores[0]); 
    //ARRAYS
    //Ejercicio 1:
    var arr = ["This", "is", "a", "sentence."];
    function printOutString() {
    var result = '';
        for(var i = 0; i < arr.length; i++){
        result += arr[i] + ' ';
    }
        console.log(result);
    }
        printOutString()

    //Ejercicio 2:
    function doubleArray() {
        var firstArray = [1, 2, 3, 4, 5]; // [2,4,6,8,10]
        for (var i = 0; i < firstArray.length; i++){
        firstArray [i] = firstArray[i] * 2;
        }
        console.log(firstArray);
        }
        doubleArray()
        
    //Ejercicio 3:
    function sumProduct(){
        var array = [4, 5, 6 ,7, 8];
        var sum = 0;
        var product = 0;
        for(var i = 0; i < array.length; i++){
        sum += array[i];
        product *= array[i];
        }
        console.log(sum + ' ' + product);
        }
        sumProduct()
        
    //Ejercicio 4:
    var student1Courses = ['Math', 'English', 'Programming'];
    var student2Courses = ['Geography', 'Spanish', 'Programming'];
        
    curso1 = student1Courses.sort();
    console.log(curso1);
        
    curso2 = student2Courses.sort();
    console.log(curso2);
        
        if (curso1[0] == curso2[0] || curso1[0] == curso2[1] || curso1[0] == curso2[2]){
            console.log(curso1[0]);
        } else if (curso1[1] == curso2[0] || curso1[1] == curso2[1] || curso1[1] == curso2[2]){
            console.log(curso1[1]);
        } else if (curso1[2] == curso2[0] || curso1[2] == curso2[1] || curso1[2] == curso2[2]){
            console.log(curso1[2]);
        } else {
            console.log("No hay cursos en común");
        }

    //Ejercicio 5:

        var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    //Write a command that prints out all of the people in the list.
        console.log(people)
    //Write the command to remove "Dani" from the array.
    var people1 = people.splice(1, 1);
        console.log(people)
    //Write the command to remove "Juan" from the array.
    var people1 = people.splice(2,1);
        console.log(people)
    //Write the command to add "Luis" to the front of the array.
    var people1 = people.splice(1,1)
    var people1 = people.unshift("Luis")
            console.log(people)
    //Write the command to add your name to the end of the array.
    var people1 = people.push("Abril")
            console.log(people)
    //Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
    //Creamos una función para iterar por los elementos del array hasta encontrar a Maria y salir del arreglo
    function itera(){ 
    if (people[0] == "Maria"){
        console.log("Exit");
    } else if (people[1] == "Maria"){
        console.log("Exit");
    } else if (people[2] == "Maria"){
        console.log("Exit");
    } else if (people[3] == "Maria"){
        console.log("Exit");
    } else {
        console.log(people);
    } return;
    }
    itera();
    console.log(people) 
    //Write the command that gives the indexOf where "Maria" is located.
    val = people.indexOf("Maria"); 
    console.log(val);

    //Sorting
    //Ejercicio 1:
    function alfa(valor){
        console.log(valor=valor.sort())
        }
        alfa(["juan","luis","pedro","alma"]);

    //Code Refactoring & Fixing Code
    //Ejercicio 1:
    function someFunction(list) {
        return list.length; 
    }
    //Ejercicio 2:
    function gradeLabel(grade=7) {
        if (grade <= 6 && grade >= 0) {
            console.log('Failed');
        }
    
        if (grade > 6 && grade <= 9) {
            console.log('Insufficient');
        }
    
        if (grade > 9 && grade <= 14) {
            console.log('Good');
        }
    
        if (grade == 15) {
            console.log('Excellent');
        }
    
        if (grade < 0 || grade > 15) {
            console.log('Error, outside of bounds');
        }
    }
    
