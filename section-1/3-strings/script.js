//**********************//
//Concat using + //
//**********************//

//Example 1
var name = "Ali";
console.log("Hello " + name); //Hello Ali
console.log("Welcome to our website, " + name); //Welcome to our website, Ali

//Example 2
var name = "Ola";
var greet = "Hello " + name;
var welcome = "Welcome to our website, " + name;
console.log(greet); //Hello Ola
console.log(welcome); //Welcome to our website, Ola

// Example 3
// var answer = No;
// console.log("Our answer is: " + answer );
//Uncaught ReferenceError: No is not defined

//Example 4
var answer = "No";
console.log("Our answer is: " + answer ); //Our answer is: No

//**********************//
//String Methods//
//**********************//

// Task 1
var name = "Ali";
var greet = "Welcome";
console.log(greet + greet + greet + name); //WelcomeWelcomeWelcomeAli

var name = "Ali";
var greet = "Welcome";
console.log(greet + " " + greet + " " + greet + " " + name); //Welcome Welcome Welcome Ali

var name = "Ali";
var greet = "Welcome ";
console.log(greet.repeat(3) + name); //Welcome Welcome Welcome Ali

//.....
// Task 2
var name = "Ola";
var greet = "Welcome ";
console.log(greet.repeat(10) + name);
// Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome Ola

//....
// Task 3
var sentence = "I count 1 to 10: 1 2 3 4 5 6 7 8 9 10";
console.log(sentence.length); //37

//....
// Task 4
var name = "Wolfeschlegelsteinhausenbergerdorff ";
var nameLength = name.length;
console.log(name.repeat(name.length));
//You will get this lengthy name shown 36 times in the console.

//....
// Task 5
console.log("You are " + 'not'.toUpperCase() + " allowed here"); //WELCOME TO OUR WEBSITE

//....
// Task 6
var welcome = "WELCOME TO OUR WEBSITE";
console.log(welcome.toLowerCase()); //welcome to our website

//....
// Task 7
var name = "Jad";
var profession = "engineer";
console.log(name + " is an " + profession ); //Jad is an engineer

//....
// Task 8
var string1 = "abc";
var string2 = "def";
console.log(string1.concat(string2)); //abcdef

//....
// Task 9
var letters = "abcdef";
console.log(letters.indexOf("a")); // 0
console.log(letters.indexOf("b")); // 1
console.log(letters.indexOf("c")); // 2
console.log(letters.indexOf("d")); // 3
console.log(letters.indexOf("e")); // 4
console.log(letters.indexOf("f")); // 5

//....
// Task 10
var greet = "Welcome";
console.log(greet.indexOf('c')); //3

//....
// Task 11
var sentence = "I went to park yesterday.";
console.log(sentence.indexOf('a')); // 15

//....
// Project
var customer1 = "Soso";
var customer2 = "Sami";
var success = "Congrats, you get 50% discount";
var failure = "Sorry, you get nothing. You should buy for the value more than 100USD";
console.log(success.toLowerCase() + " " + customer1.repeat(customer1.length));
console.log(failure.toUpperCase() + " " + customer2.toUpperCase());
