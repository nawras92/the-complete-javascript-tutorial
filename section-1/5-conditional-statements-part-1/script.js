// Writing Conditions
var customerPaid = 150;
if(customerPaid >= 100){
  var customerGetsDiscount = true;
}else{
  var customerGetsDiscount = false;
}
console.log(customerGetsDiscount); //true


var customerPaid = 50;
if(customerPaid >= 100){
  var customerGetsDiscount = true;
}else{
  var customerGetsDiscount = false;
}
console.log(customerGetsDiscount); //false


var customerPaid = 200;
if(customerPaid >= 100){
  var customerGetsDiscount = true;
}else{
  var customerGetsDiscount = false;
}
console.log(customerGetsDiscount); //true

//Task 1
if(30 > 80){
  console.log(true);
}else{
  console.log(false);
}
// true

//Task 2
var providedName = "Ali";
if(providedName == "Ali"){
  console.log("Allowed");
}else{
  console.log("Not Allowed");
}
// Allowed

var providedName = "Ola";
if(providedName == "Ali"){
  console.log("Allowed");
}else{
  console.log("Not Allowed");
}
//Not Allowed

//Task 3
var personTemp = 38;
if(personTemp >= 37.5){
  console.log("Above 37.5");
}
// Above 37.5

var personTemp = 37;
if(personTemp >= 37.5){
  console.log("Above 37.5");
}
//

//Task 4
var roomTemp = 15;
if(roomTemp <= 25){
  console.log("It can be normal or cold.");
}
//It can be normal or cold.

var roomTemp = 70;
if(roomTemp <= 25){
  console.log("It can be normal or cold.");
}
//

// Task 5
var kidBuys = "bread";
if(kidBuys != "ice cream"){
  console.log("You are such a good kid");
}else{
  console.log("You should not buy ice cream");
}
//You are such a good kid

var kidBuys = "ice cream";
if(kidBuys != "ice cream"){
  console.log("You are such a good kid");
}else{
  console.log("You should not buy ice cream");
}
//You should not buy ice cream

//Task 6
var testVar = 10;
if(typeof testVar === 'number'){
  console.log("It is a number");
}
// It is a number

var testVar = "Hello";
if(typeof testVar === 'number'){
  console.log("It is a number");
}
//

//Task 7
var testVar = 10;
if(typeof testVar === 'string'){
  console.log("It is a string");
}
//

var testVar = "Hello";
if(typeof testVar === 'string'){
  console.log("It is a string");
}
// It is a string

//Task 8
var testVar = true;
if(typeof testVar === 'boolean'){
  console.log("It is a boolean");
}
// It is a boolean

var testVar = "true";
if(typeof testVar === 'boolean'){
  console.log("It is a boolean");
}
//

// Task 9
var requiredPassword = "123";
var userPassword = "xyz";
if(userPassword !== requiredPassword){
  var loginAllowed = false;
}else{
  var loginAllowed = true;
}
console.log(loginAllowed);
//false

//Task 10
var requiredPassword = "123";
var userPassword = "123";
if(userPassword !== requiredPassword){
  var loginAllowed = false;
}else{
  var loginAllowed = true;
}
console.log(loginAllowed);
//true

// Writing more conditions
var roomTemp = 6;
if(roomTemp <= 25){
  console.log("It can be normal, cold or extremely cold");
}
if(roomTemp <15){
  console.log("It can be a bit cold or extremely cold");
}
if(roomTemp <0){
  console.log("It is extremely cold");
}
/*
It can be normal, cold or extremely cold
It can be a bit cold or extremely cold
*/

var roomTemp = 6;
if(roomTemp <= 25 && roomTemp >= 20){
  console.log("The weather is nice.");
}
if(roomTemp < 20 && roomTemp >= 10){
  console.log("Well, it is a bit cold!");
}
if(roomTemp <10 && roomTemp >= 5){
  console.log("Woe, it is real cold!");
}
if(roomTemp <0){
  console.log("It is extremely cold!");
}
