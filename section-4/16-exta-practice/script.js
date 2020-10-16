// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 16- Extra Practice
// Last Update: 3-10-2020
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
// /*
// num1: 1
// num2: 2
// num3: 3
// rest: (num1+num2)/num3
// */
//
// var obj = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   rest: function(){
//     return (this.num1 + this.num2) / this.num3;
//   }
// };
//
// console.log(obj);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var obj = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   rest: function(){
//     return (this.num1 + this.num2) / this.num3;
//   }
// };
//
// console.log(obj.num2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var obj = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   rest: function(){
//     return (this.num1 + this.num2) / this.num3;
//   }
// };
//
// console.log(obj.constructor);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var obj = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   rest: function(){
//     return (this.num1 + this.num2) / this.num3;
//   }
// };
//
// console.log(obj instanceof Array);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var obj = {
//   num1: 1,
//   num2: 2,
//   num3: 3,
//   rest: function(){
//     return (this.num1 + this.num2) / this.num3;
//   }
// };
//
// console.log(Object.getPrototypeOf(obj));
// //or
// //console.log(obj.__proto__);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// function Obj(n1, n2, n3){
//   this.num1 = n1;
//   this.num2 = n2;
//   this.num3 = n3;
//   this.rest = function(){
//     return (this.num1 + this.num2) / this.num3;
//   };
// }
//
// var obj1 = new Obj(1, 2, 3);
// console.log(obj1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// function Obj(n1, n2, n3){
//   this.num1 = n1;
//   this.num2 = n2;
//   this.num3 = n3;
//   this.rest = function(){
//     return (this.num1 + this.num2) / this.num3;
//   };
// }
//
// console.log(Obj.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// function Obj(n1, n2, n3){
//   this.num1 = n1;
//   this.num2 = n2;
//   this.num3 = n3;
// }
//
// Obj.prototype.rest = function(){
//   return (this.num1 + this.num2) / this.num3;
// };
//
// var obj1 = new Obj(1, 2, 3);
// console.log(obj1.rest());
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// /*
// Object properties
// title: null
// section: null
// course: null
// difficultyLevel: null
// */
//
// var lessonPrototype = {
//   title: null,
//   section: null,
//   course: null,
//   difficultyLevel: null
// };
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// /*
// Object properties
// title: "Prototypes"
// section: "Section 4"
// course: "JavaScript Course"
// difficultyLevel: "Normal"
// */
//
// var lessonPrototype = {
//   title: null,
//   section: null,
//   course: null,
//   difficultyLevel: null
// };
//
// var lesson1 = Object.create(lessonPrototype,{
//   title: {
//     value: "Prototypes"
//     },
//   section: {
//     value: "Section 4"
//     },
//   course: {
//     value: "JavaScript Course"
//     },
//   difficultyLevel: {
//     value: "Normal"
//   }
// });
//
// console.log(lesson1);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// for(prop in obj){
//   console.log(`${prop}:${obj[prop]}`);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// console.log(Object.entries(obj));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// for(var el of Object.entries(obj)){
//   console.log(el);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// for(var prop in obj){
//   console.log(prop);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// console.log(Object.keys(obj));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// for(var key of Object.keys(obj)){
//   console.log(key);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// for(var prop in obj){
//   console.log(obj[prop]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// console.log(Object.values(obj));
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var obj = {
//   title: "Data Types",
//   section: "Section 4",
//   course: "JavaScript Course",
//   difficultyLevel: "Normal"
// };
//
// for(var value of Object.values(obj)){
//   console.log(value);
// }
// console.log("..............................");
//
