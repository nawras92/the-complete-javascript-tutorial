// True or False
var sosoCanGetDiscount = 150 > 100;
console.log(sosoCanGetDiscount); //true

var samiCanGetDiscount = 50 > 100;
console.log(samiCanGetDiscount); //false

//Task 1
var thirtyLessThanEighty = 30 < 80;
console.log(thirtyLessThanEighty); //true

//Task 2
var thirtyLessThanEighty = 30 < 80;
console.log(typeof thirtyLessThanEighty); //boolean

//Task 3
var word = "Hello";
console.log(typeof word); //string

//Task 4
var num = 10;
console.log(typeof num); //number

//Task 5
var bool1 = true;
console.log(typeof bool1); //boolean

//Task 6
var bool2 = false;
console.log(typeof bool2); //boolean

//Task 7
var name1 = "Ali";
var name2 = "Ola";
console.log(name1 == "Ali"); //true
console.log(name2 == "Ali"); //false

//Task 8
var temp1 = 39;
console.log(temp1 >= 37.5); //true
var temp2 = 37.5;
console.log(temp2 >= 37.5); //true
var temp3 = 37;
console.log(temp3 >= 37.5); //false

//Task 9
var temp1 = 25;
console.log(temp1 <= 25); //true
var temp2 = 30;
console.log(temp2 <= 25); //false
var temp3 = 0;
console.log(temp3 <= 25); //true

//Task 10
var kidBuys = "bread";
console.log(kidBuys != "ice cream"); //true
var kidBuys = "ice cream";
console.log(kidBuys != "ice cream"); //false

//Task 11
var num = "5";
console.log(5 == num); //true
var num = "5";
console.log(5 === num); //false

var num = "5";
console.log(typeof num); //string

console.log(typeof 5); //number

//Task 12
var testVar = "555";
console.log(testVar !== 555); //true

//Project
var customer1 = "Soso";
var customer1GetsDiscount = 150 >= 100;
console.log(customer1 + " got the discount: " + customer1GetsDiscount ); //Soso gets discount: true
var customer2 = "Sami";
var customer2GetsDiscount = 50 >= 100;
console.log(customer2 + " got the discount: " + customer2GetsDiscount ); //Sami gets discount: false
/*
Soso got the discount: true
Sami got the discount: false
*/
