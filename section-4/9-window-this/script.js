// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 9- Windows & This
// Last Update: 1-10-2020
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
// alert("Nawras");
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// window.alert("Nawras")
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// console.log(window);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// console.log(typeof window);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var webPage = {
//   title: "Window Object",
//   description: "What is the window object? and what does it represent?"
// };
//
// console.log(webPage);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var webPage = {
//   title: "Window Object",
//   description: "What is the window object? and what does it represent?"
// };
//
// console.log(window.webPage);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var webPage = {
//   title: "Window Object",
//   description: "What is the window object? and what does it represent?"
// };
//
// console.log(window.hasOwnProperty("webPage"));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var myWord = "Only knowledge can free and save us, but with knowledge must go virtue.";
//
// console.log(myWord);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var myWord = "Only knowledge can free and save us, but with knowledge must go virtue.";
//
// console.log(window.myWord);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var myWord = "Only knowledge can free and save us, but with knowledge must go virtue.";
//
// console.log(window.hasOwnProperty("myWord"));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var returnsTrue = () => true;
//
// console.log(returnsTrue());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var returnsTrue = () => true;
//
// console.log(window.returnsTrue());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var returnsTrue = () => true;
//
// console.log(window.hasOwnProperty("returnsTrue"));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var webPage = {
//   title: "Window Object",
//   description: "What is the window object? and what does it represent?"
// };
//
// console.log(this.webPage);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var myWord = "Only knowledge can free and save us, but with knowledge must go virtue.";
//
// console.log(this.myWord);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var returnsTrue = () => true;
//
// console.log(this.returnsTrue());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// console.log(window === this);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// function returnsThis(){
//   return this;
// }
//
// console.log(returnsThis());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// var a = "I'm in the global scope";
//
// function returnsA(){
//   var a = "I'm in the local scope";
//   return this.a;
// }
//
// console.log(returnsA());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// var laptop = {
//   processor: "i5",
//   ram: 2,
//   storage: "0.5TB",
//   additionalRAM : 4
// };
//
// console.log(laptop);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// var laptop = {
//   processor: "i5",
//   ram: 2,
//   storage: "0.5TB",
//   additionalRAM : 4,
//   totalRAM: ram + additionalRAM
// };
//
// console.log(laptop);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// var laptop = {
//   processor: "i5",
//   ram: 2,
//   storage: "0.5TB",
//   additionalRAM : 4,
//   totalRAM: this.ram + this.additionalRAM
// };
//
// console.log(laptop.totalRAM);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// var laptop = {
//   processor: "i5",
//   ram: 2,
//   storage: "0.5TB",
//   additionalRAM : 4,
//   totalRAM: function(){
//     return this.ram + this.additionalRAM;
//   }
// };
//
// console.log(laptop.totalRAM());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
//
// var laptop = {
//   processor: "i5",
//   ram: 2,
//   storage: "0.5TB",
//   additionalRAM : 4,
//   totalRAM: function(){
//     return this;
//   }
// };
//
// console.log(laptop.totalRAM());
//
// console.log("..............................");
