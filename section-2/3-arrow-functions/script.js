// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 2
// Lesson: 3- Arrow Functions
// Last Update: 14-08-2020
// Author: Nawras Ali
// Author YouTube Channel: https://youtube.com/c/learnwithnaw
// */
//
// //Note: Run each task separately
//
// /*###########*/
//   //Task 1//
// /*###########*/
// console.log("####### Task 1 #######");
//
// function addTwoNumbers(num1, num2){
//   return num1 + num2
// }
//
// console.log(addTwoNumbers(2, 4));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var addTwoNumbers = function(num1, num2){
//   return num1 + num2;
// }
//
// console.log(addTwoNumbers(2, 4));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// (function(num1, num2){
//   return num1 + num2;
// })(2, 4);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var result = (function(num1, num2){
//   return num1 + num2;
// })(2,4);
//
// console.log(result);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var addTwoNumbers = (num1, num2) => num1 + num2;
//
// console.log(addTwoNumbers(2, 4));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var addNumbers = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
//
// console.log(addNumbers(2, 4, 5, 6));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var add123 = str => str + 123;
//
// console.log(add123("Hi"));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var returns1 = () => 1;
//
// console.log(returns1());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var squareOfNum = num => num * num;
//
// console.log(squareOfNum(5));
// console.log(squareOfNum(9));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var isUsernameValid = username => username ? true : false;
//
// console.log(isUsernameValid("Ali"));
// console.log(isUsernameValid(""));
// console.log(isUsernameValid(null));
// console.log(isUsernameValid("Ola"));
// console.log(isUsernameValid(undefined));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var isUsernameValid = username => {
//       if(username){
//         return true;
//       }else{
//         return false;
//       }
// }
//
// console.log(isUsernameValid("Ali"));
// console.log(isUsernameValid(""));
// console.log(isUsernameValid(null));
// console.log(isUsernameValid("Ola"));
// console.log(isUsernameValid(undefined));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var isUsernameValid = username => !!username;
//
// console.log(isUsernameValid("Ali"));
// console.log(isUsernameValid(""));
// console.log(isUsernameValid(null));
// console.log(isUsernameValid("Ola"));
// console.log(isUsernameValid(undefined));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var stringLength = value => typeof value === "string" ? value.length : false;
//
// console.log(stringLength("Nawras"));
// console.log(stringLength(5));
// console.log(stringLength("5"));
// console.log(stringLength(true));
// console.log(stringLength("Jad"));
// console.log(stringLength(undefined));
// console.log(stringLength(null));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var isSecure =  protocol =>  protocol === "https" ? "secure" : "insecure";
//
// console.log(isSecure("http"));
// console.log(isSecure("https"));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var isSecure =  (protocol =>  protocol === "https" ? "secure" : "insecure")("http");
//
// console.log(isSecure);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var counting = (firstNum, secondNum) => {
//   for(var i=firstNum; i<= secondNum; i++){
//     console.log(i);
//   }
// }
//
// counting(5, 9);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// ((firstNum, secondNum) => {
//   for(var i=firstNum; i<= secondNum; i++){
//     console.log(i);
//   }
// })(5, 9);
