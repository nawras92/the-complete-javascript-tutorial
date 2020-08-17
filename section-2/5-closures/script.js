// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 2
// Lesson: 5- Closures
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
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   return cleanClothes;
// }
//
// var isClean  = washingMachine();
// console.log(isClean);
//
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// function extraCleaning(){
//   var startExtraCleaning = true;
//   var cleanExtraClothes = "The clothes are extra clean now!";
//   return cleanExtraClothes;
// }
//
//
// var isClean  = extraCleaning();
// console.log(isClean);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   function extraCleaning(){
//     var startExtraCleaning = true;
//     var cleanExtraClothes = "The clothes are extra clean now!";
//     return cleanExtraClothes;
//   }
//
//   return extraCleaning;
// }
//
// var isClean  = washingMachine();
// console.log(isClean());
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   function extraCleaning(){
//     var startExtraCleaning = true;
//     var cleanExtraClothes = "The clothes are extra clean now!";
//     return cleanExtraClothes;
//   }
//
//   return extraCleaning;
// }
//
// var isClean  = washingMachine();
// console.log(isClean());
//
// console.log(startCleaning);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   function extraCleaning(){
//     var startExtraCleaning = true;
//     var cleanExtraClothes = "The clothes are extra clean now!";
//
//     console.log(startCleaning);
//
//     return cleanExtraClothes;
//   }
//
//   return extraCleaning;
// }
//
// var isClean  = washingMachine();
// console.log(isClean());
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   function extraCleaning(){
//     var startExtraCleaning = true;
//     var cleanExtraClothes = "The clothes are extra clean now!";
//
//     console.log(cleanClothes);
//
//     return cleanExtraClothes;
//   }
//
//   return extraCleaning;
// }
//
// var isClean  = washingMachine();
// console.log(isClean());
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   function extraCleaning(){
//     var startExtraCleaning = true;
//     var cleanExtraClothes = "The clothes are extra clean now!";
//
//     return cleanExtraClothes;
//   }
//
//   console.log(startExtraCleaning);
//   return extraCleaning;
// }
//
// var isClean  = washingMachine();
// console.log(isClean());
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// function washingMachine(){
//   var startCleaning = true;
//   var cleanClothes = "The clothes are clean now!";
//
//   function extraCleaning(){
//     var startExtraCleaning = true;
//     var cleanExtraClothes = "The clothes are extra clean now!";
//
//     return cleanExtraClothes;
//   }
//
//   console.log(cleanExtraClothes);
//   return extraCleaning;
// }
//
// var isClean  = washingMachine();
// console.log(isClean());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// function processValue(value){
//   var process1Result = value + 5;
//
//   function processValueAgain(){
//      var process2Result = process1Result / 2;
//
//      return process2Result;
//   }
//
//   return processValueAgain;
// }
//
// var finalResult = processValue(7);
// console.log(finalResult());
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// function processValue(value){
//   var process1Result = value + 5;
//
//   function processValueAgain(){
//      console.log(process1Result);
//      var process2Result = process1Result / 2;
//
//      return process2Result;
//   }
//
//   return processValueAgain;
// }
//
// var finalResult = processValue(7);
// console.log(finalResult());
// // console.log("..............................");
//
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// function processValue(value){
//   var process1Result = value + 5;
//
//   function processValueAgain(){
//      var process2Result = process1Result / 2;
//
//      return process2Result;
//   }
//
//   return processValueAgain;
// }
//
// var finalResult = processValue(7);
// console.log(finalResult());
//
// console.dir(finalResult);
// console.log("..............................");
//
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");

// var num = 0;
// function counter(){
//   num++;
//   return num;
// }
//
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log("..............................");
//
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var num = 0;
// function counter(){
//   num++;
//   return num;
// }
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
//
// num = 15;
//
// console.log(counter());
// console.log(counter());

// console.log("..............................");
//
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// function counter(){
//   var num = 0;
//   num++;
//   return num;
// }
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log("..............................");
//
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// function counter(){
//   var num = 0;
//   function updateNum(){
//     num++;
//     return num;
//   }
//   return updateNum;
// }
//
// console.log(counter()());
// console.log(counter()());
// console.log(counter()());
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var counter = (function(){
//   var num = 0;
//   function updateNum(){
//     num++;
//     return num;
//   }
//   return updateNum;
// })();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log("..............................");
//
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");

// function func1(num1){
//
//   function func2(num2){
//     return num1 * num2;
//   }
//
//   return func2;
// }
//
// console.log(func1(2)(4));
// console.log(func1(5)(10));
// console.log(func1(1)(0));
// console.log(func1(15)(8));
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");

// function func1(num1){
//
//   function func2(num2){
//     return num1 * num2;
//   }
//
//   return func2;
// }
//
// console.dir(func1());

// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// function func1(num1){
//
//   function func2(num2){
//
//     function func3(num3){
//       return num1 * num2 + num3;
//     }
//
//     return func3;
//   }
//
//   return func2;
// }
//
// console.log(func1(2)(4)(8));
// console.log(func1(5)(10)(6));
// console.log(func1(1)(0)(1));
// console.log(func1(15)(8)(10));

// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// function func1(num1){
//
//   function func2(num2){
//
//     function func3(num3){
//       return num1 * num2 + num3;
//     }
//
//     return func3;
//   }
//
//   return func2;
// }
//
// console.dir(func1()())
// 
// console.log("..............................");
