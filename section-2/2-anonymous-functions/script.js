// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 2
// Lesson: 2- Anonymous Functions
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
// function displayHello(){
//   console.log("Hello");
// }
//
// displayHello();
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var displayHello = function(){
//   console.log("Hello");
// };
//
// displayHello();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var addTwoNumbers = function(num1, num2){
//   return num1 + num2;
// }
//
// console.log(addTwoNumbers(5, 6));
// console.log(addTwoNumbers(10, 20));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var isTrue = function(value){
//   if(value === true){
//     return true;
//   }else{
//     return false;
//   }
// }
//
// console.log(isTrue(""));
// console.log(isTrue("Hello"));
// console.log(isTrue(true));
// console.log(isTrue(null));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var add123 = function(value){return (value + 123);}
//
// console.log(add123("Hello"));
// console.log(add123("nana"));
// console.log(add123(undefined));
// console.log(add123(null));
// console.log(add123(false));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var convertToNumber = function(value){
//   return Number(value);
// }
// console.log(convertToNumber("123"));
// console.log(convertToNumber(false));
// console.log(convertToNumber(true));
// console.log(convertToNumber("lala"));
// console.log(convertToNumber(null));
// console.log(convertToNumber(undefined));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var convertToString = function(value){
//   return String(value);
// }
// console.log(convertToString(123));
// console.log(convertToString(false));
// console.log(convertToString(true));
// console.log(convertToString("lala"));
// console.log(convertToString(null));
// console.log(convertToString(undefined));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var add123 = function(value){
//   var result = value + 123
//   console.log(`value: ${value}, value type: ${typeof value}`);
//   console.log(`${typeof value} + ${typeof 123} = ${typeof result}`);
//   console.log(`${value} + 123 = ${result}`)
//   console.log("..............................");
// }
//
// add123("Hello");
// add123("nana");
// add123(undefined);
// add123(null);
// add123(false);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var typeofNaN = function(){
//   console.log(typeof NaN);
// }
//
// typeofNaN();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var isNotANumber = function(value){
//   console.log(isNaN(value));
// }
//
// isNotANumber(5);
// isNotANumber(null);
// isNotANumber(NaN);
// isNotANumber(undefined);
// isNotANumber(false);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var add456 = function(value){return (value + 456);}
//
// console.log(add456("Hello"));
// console.log(add456("nana"));
// console.log(add456(undefined));
// console.log(add456(null));
// console.log(add456(false));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var washingMachine = function(){
//   console.log("Hi, I am a great washing machine, I will clean your clothes now.");
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var extraCleaningMode = function(){
//   console.log("Hi, I am set on the extra cleaning mode now");
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var extraCleaningMode = function(){
//   console.log("Hi, I am set on the extra extra cleaning mode now");
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// function washClothes(mode){
//   if(mode === 2){
//     return function(){
//      console.log("Hi, I am set on the extra cleaning mode now.");
//    }
//   }else if(mode == 3){
//     return function(){
//       console.log("Hi, I am set on the extra extra cleaning mode now.");
//     }
//   }else{
//     return function(){
//       console.log("Hi, I am a great washing machine, I will clean your clothes now.");
//     }
//   }
// }
//
// washClothes(1)();
// washClothes(2)();
// washClothes(3)();
// washClothes()();
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var accessAllowed = function(){
//   var allPermissions = "Granted";
//   console.log("You are allowed here.");
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var accessDenied = function(){
//   var allPermissions = "Removed";
//   console.log("You are not allowed here.");
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// function isLoggedIn(userLoggedIn){
//   if(userLoggedIn){
//     return function(){
//       var allPermissions = "Granted";
//       console.log("You are allowed here.");
//     }
//   }else{
//     return function(){
//       var allPermissions = "Removed";
//       console.log("You are not allowed here.");
//     }
//   }
// }
//
// isLoggedIn(true)();
// isLoggedIn(false)();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// var accessAllowed = function(){
//   var allPermissions = "Granted";
//   console.log("You are allowed here.");
// }()
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// var accessDenied = function(){
//   var allPermissions = "Removed";
//   console.log("You are not allowed here.");
// }()
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// function isLoggedIn(userLoggedIn){
//   if(userLoggedIn){
//     return function(){
//       var allPermissions = "Granted";
//       console.log("You are allowed here.");
//     }()
//   }else{
//     return function(){
//       var allPermissions = "Removed";
//       console.log("You are not allowed here.");
//     }()
//   }
// }
//
// isLoggedIn(true);
// isLoggedIn(false);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// (function(){
//   console.log("Hello");
// })();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// function(){
//   console.log("Hello");
// }();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
//
// (function(){
//   var password = "topSecret";
//   console.log("It is set");
// })();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
//
// (function(){
//   var secretWord = "thisIsASecertWord";
// })();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
//
// (function(){
//   var secretWord = "thisIsASecertWord";
// })();
// console.log(secretWord);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
//
// (function(num){
//   var result = (num + 5)/10;
//   console.log(result + 10);
// })(50);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 28//
// /*###########*/
// console.log("####### Task 28 #######");
//
// (function(num){
//   var result = (num + 5)/10;
//   console.log(result + 10);
// })(50);
// console.log(result);
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 29//
// /*###########*/
// console.log("####### Task 29 #######");
//
// (function(){
//   var secretNumber = 1111;
//   return secretNumber;
// })();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 30//
// /*###########*/
// console.log("####### Task 30 #######");
//
// (function(){
//   var secretNumber = 1111;
//   return secretNumber;
// })();
// console.log(secretNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 31//
// /*###########*/
// console.log("####### Task 31 #######");
//
// var getSecretNumber = (function(){
//   var secretNumber = 1111;
//   return secretNumber;
// })();
// console.log(getSecretNumber);
