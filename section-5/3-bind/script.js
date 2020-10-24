// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 5
// Lesson: 3- Bind Method
// Last Update: 13-10-2020
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
// var obj1 = {
//   val: 1,
//   func: function(){
//     return this.val + 5;
//   }
// };
//
// var obj2 = {
//   val: 2
// };
//
// var result = obj1.func.call(obj2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var obj1 = {
//   val: 1,
//   func: function(){
//     return this.val + 5;
//   }
// };
//
// var obj2 = {
//   val: 2
// };
//
// var result = obj1.func.bind(obj2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var obj1 = {
//   val: 1,
//   func: function(){
//     return this.val + 5;
//   }
// };
//
// var obj2 = {
//   val: 2
// };
//
// var result = obj1.func.bind(obj2);
// console.log(result());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function greet(name){
//   return `Hello dear ${name}`;
// }
//
// var result = greet.call(window, "Nawras");
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function greet(name){
//   return `Hello dear ${name}`;
// }
//
// var result = greet.bind(window, "Nawras");
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// function greet(name){
//   return `Hello dear ${name}`;
// }
//
// var result = greet.bind(window, "Nawras");
// console.log(result());
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");

// var person1 = {
//   name: "Sangeeta",
//   languages: "Hindi, Sanskrit, and Tamil",
//   speaks: function(){
//     return `${this.name} speaks ${this.languages}.`;
//   }
// };
//
//
// var person2 = {
//   name: "Nada",
//   languages: "Arabic, French, Spanish, and English"
// }
//
// var result = person1.speaks.bind(person2);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var person1 = {
//   name: "Sangeeta",
//   languages: "Hindi, Sanskrit, and Tamil",
//   speaks: function(){
//     return `${this.name} speaks ${this.languages}.`;
//   }
// };
//
//
// var person2 = {
//   name: "Nada",
//   languages: "Arabic, French, Spanish, and English"
// }
//
// var result = person1.speaks.bind(person2);
// console.dir(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var person1 = {
//   name: "Sangeeta",
//   languages: "Hindi, Sanskrit, and Tamil",
//   speaks: function(){
//     return `${this.name} speaks ${this.languages}.`;
//   }
// };
//
//
// var person2 = {
//   name: "Nada",
//   languages: "Arabic, French, Spanish, and English"
// }
//
// var result = person1.speaks.bind(person2);
// console.log(result());
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function add(num1, num2, num3, num4){
//   return num1 + num2 + num3 + num4;
// }
//
// var obj = {
//   a: 1,
//   b: 2,
//   c: 2
// };
//
// var result = add.bind(obj, 5, 6, 0, 1);
//
// console.log(result());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// function min(a, b){
//   return a < b ? a : b;
// }
//
// var obj = {
//   a: 5,
//   b: 10
// }
//
// var boundFunction = min.bind(obj, obj.a, obj.b);
// console.log(boundFunction());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// function min(a, b){
//   return a < b ? a : b;
// }
//
// var obj = {
//   a: 5,
//   b: 10
// }
// obj.a = 20;
//
// var boundFunction = min.bind(obj, obj.a, obj.b);
// console.log(boundFunction());
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function house(floor, area){
//   return `A ${area} square meter house with ${floor} floor(s)`;
// }
//
// var f = 4;
// var a = 200;
//
// var boundFunction = house.bind({}, f, a);
// console.log(boundFunction());
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// function checkPassword(){
//   return this.pass.length > 12 ? "Strong" : "Weak";
// }
//
// var user = {
//   name: "Ali",
//   pass: "14789456",
//   email: "ali@mail.com"
// };
//
// var boundFunction = checkPassword.bind(user);
// console.log(boundFunction());
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// function checkPassword(){
//   return this.pass.length > 12 ? "Strong" : "Weak";
// }
//
// var user = {
//   name: "Ali",
//   pass: "14789456",
//   email: "ali@mail.com"
// };
// user.pass = "1234567891234";
//
// var boundFunction = checkPassword.bind(user);
// console.log(boundFunction());
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var counting = function() {
//   for(var i=this.firstNum; i<= this.secondNum; i++){
//     console.log(i);
//   }
//   return "done";
// }
//
// var obj = {
//   firstNum: 10,
//   secondNum: 13
// };
//
// var boundFunction = counting.bind(obj);
// console.log(boundFunction());

// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var obj1 = {
//   star1: 1,
//   star2: 2,
//   starsNo: function(){
//     return this.star1 + this.star2 + this.star3;
//   }
// };
//
// var obj2 = {
//   star1: 10,
//   star2: 20,
//   star3: 30
// };
//
// var result = obj1.starsNo.bind(obj2)
// console.log(result());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// function calc(num1, num2, num3){
//   return (num1 + num2 + num3 + 5) / this.count;
// }
//
// var obj = {
//   count: 5
// };
//
// var result = calc.bind(obj, 5, 10, 5);
// console.log(result());
//
// console.log("..............................");
//
