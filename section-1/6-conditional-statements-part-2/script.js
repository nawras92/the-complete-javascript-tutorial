//Task 1
var username = "Jojo";
var password = "123";
if(username === "Jojo" && password === "123"){
    console.log("Welcome Jojo!");
}
//Welcome Jojo!

var username = "Ali";
var password = "123";
if(username === "Jojo" && password === "123"){
    console.log("Welcome Jojo!");
}
//

var username = "Jojo";
var password = "4536";
if(username === "Jojo" && password === "123"){
    console.log("Welcome Jojo!");
}
//

//Task 2:
var username = "Ali";
var hasKey = true;
if(username === "Ali" && hasKey){
    console.log("You are allowed in the room");
}
//"You are allowed in the room"

var username = "Ali";
var hasKey = false;
if(username === "Ali" && hasKey){
    console.log("You are allowed in the room");
}
//

// Task 3
var customerCoupon = "X5";
var customerPaid = 30;
if(customerCoupon === 'X123' && customerPaid >= 50){
    console.log("You got a discount");
}
//

var customerCoupon = "X123";
var customerPaid = 30;
if(customerCoupon === 'X123' && customerPaid >= 50){
    console.log("You got a discount");
}
//

var customerCoupon = "X123";
var customerPaid = 50;
if(customerCoupon === 'X123' && customerPaid >= 50){
    console.log("You got a discount");
}
//You got a discount


//Or Logical Operator

var customerCoupon = "X123";
var customerPaid = 20;
if(customerCoupon === 'X123' || customerPaid >= 50){
    console.log("You got a discount");
}
//You got a discount

var customerCoupon = "X5";
var customerPaid = 70;
if(customerCoupon === 'X123' || customerPaid >= 50){
    console.log("You got a discount");
}
//You got a discount

var customerCoupon = "X123";
var customerPaid = 100;
if(customerCoupon === 'X123' || customerPaid >= 50){
    console.log("You got a discount");
}
//You got a discount

var customerCoupon = "U123";
var customerPaid = 10;
if(customerCoupon === 'X123' || customerPaid >= 50){
    console.log("You got a discount");
}
//

// Some practice
//Task 4
var roomTemp = 40;
if(roomTemp > 40 || roomTemp < 0){
  console.log("Extreme weather");
}
//

//Task 5
var kidBuys = "chocolate";
if(kidBuys === "chocolate" || kidBuys === "ice cream"){
  console.log("You should not buy ice cream or chocolate");
}
//You should not buy ice cream or chocolate

//Task 6
var thereAreClouds = false;
var isItHot = true;
if(thereAreClouds || isItHot){
  console.log("It is going to rain");
}else{
  console.log("There is no rain");
}
//It is going to rain

//Task 7
var mathMark = 82;
var arabicMark = 70;
if(mathMark > 80 || arabicMark > 90){
  var rewarded = true;
}else{
  var rewards = false;
}
console.log(rewarded);
//true

//Task 8
var age = 17;
var hasPermission = false;
if(age >= 18 || hasPermission){
  console.log("Allowed")
}
//

//logical Not
//Task 9
var testValue = false;
if(!testValue){
  console.log("The condition is true");
}else{
  console.log("The condition is false");
}
//The condition is true


//Task 10
var testValue = true;
if(!testValue){
  console.log("The condition is true");
}else{
  console.log("The condition is false");
}
//The condition is false

//Task 11
var hasKey = false;
if(!hasKey){
  var accessDenied = true;
}else{
  accessDenied = false;
}
console.log(accessDenied);
//true

//Task 12
var username = "";
if(!username){
  console.log("Please provide your username! The username field can not be empty!")
}
//Please provide your name! The isername field can not be empty!


//Task 13
var temp = 0;
if(!temp){
  var boyCanGoOut = true;
}else{
  var boyCanGoOut = false;
}
console.log(boyCanGoOut);
//true

//Task 14
var password = null;
if(!password){
  console.log("Please provide a password");
}
//Please provide a password

//Task 15
var username = '';
if(!username){
  console.log("Please provide a username");
  console.log(typeof username);
}
var password = null;
if(!password){
  console.log("Please provide a password");
  console.log(typeof password)
}
/*
Please provide a username
string
Please provide a password
object
*/

//Task 16
var mathMark = null;
if(!mathMark){
  console.log("Please provide us with math mark");
}
//Please provide us with math mark

//Task 17
var thresholdValue = null;
if(!thresholdValue){
  console.log("Please provide the threshold value");
}
//Please provide the threshold value
