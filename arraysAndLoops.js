//Actividades https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops

//EXERCISE 1
//Part 1. There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var bankArray = ["Sofia", "David", "Juan"];
console.log(bankArray);

//Part 2. Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

bankArray.push("Sara");
bankArray.push("Agustín");
bankArray.shift();

console.log(bankArray);

//Part 3. It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
bankArray.shift();
bankArray.unshift("Renata");
bankArray.unshift("David");
bankArray.push("Elena");
console.log(bankArray);


//EXERCISE #2
//Write a JavaScript program to construct the following pattern, using a nested for loop.
for (var i = 1; i <= 5; i++){
    let figura = "* ";
    console.log(figura.repeat(i));
}

//EXERCISE #3
//Write while loops to do the following:

//Part 1. Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

var xValue = 5;
while (xValue > 0){
    xValue -= 0.5;
    console.log(xValue);
}

//Part 2. Print all the odd numbers between 1 - 100.
let oddNumbers = 0;
while (oddNumbers < 100){
    oddNumbers = oddNumbers + 1;
    if (oddNumbers % 2 != 0){
        console.log(oddNumbers);
    }
}

//Part 3. - Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

function loop(){
let n = 0;
while(n < 6){
    n++;
    console.log("["+n+"]");
}
}
loop();


/*Part 4. Write a method with a while loop that computes the sum of first n positive integers: 
//sum = 1 + 2 + 3 + … + n
//Examples:
//n = 5 sum = 15
n = 19 sum = 190
*/

function sum(){
let n = 0;
let sum = 0;
let i = 19;
while(n < i){
    n++;
    sum = sum + n;
}
console.log("n = " + i + " sum =" + sum);
}
sum();