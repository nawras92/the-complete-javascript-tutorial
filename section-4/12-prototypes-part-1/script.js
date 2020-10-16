// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 12- Prototypes Part 1
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
// var phone = {
//   os: null,
//   ram: null,
//   storage: null
// };
// */
//
// function Phone(os, ram, stg){
//   this.os = os;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(phone1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// function Phone(os, ram, stg){
//   this.os = os;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(typeof Phone);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// function Phone(os, ram, stg){
//   this.os = os;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(Phone instanceof Object);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function Phone(os, ram, stg){
//   this.os = os;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(Phone.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function Phone(os, ram, stg){
//   this.os = os;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(typeof Phone.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// function Phone(os, ram, stg){
//   this.os = os;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(Phone.prototype.constructor);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// console.log(Set.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// console.log(typeof Set.prototype);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// console.log(Set.prototype.add);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var set1 = new Set();
//
// console.log(set1);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var set1 = new Set();
//
// set1.add(5);
//
// console.log(set1);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var set1 = new Set();
//
// set1.add(5);
// set1.add(8);
//
// console.log(set1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var set1 = new Set();
//
// set1.add(5);
// set1.add(8);
// set1.add(5);
//
// console.log(set1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// console.log(Set.prototype.delete);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var set1 = new Set();
//
// set1.add(5);
// set1.add(8);
// set1.add(5);
// set1.delete(8)
//
// console.log(set1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// console.log(Set.prototype.clear);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var set1 = new Set();
//
// set1.add(5);
// set1.add(8);
// set1.add(5);
// set1.delete(8)
// set1.clear()
//
// console.log(set1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// console.log(`The type of Set constructor: ${typeof Set}`);
// console.log(`Is Set constructor an instance of Object constructor: ${Set instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// console.log(`The type of Set.prototype: ${typeof Set.prototype}`);
// console.log(`Is Set.prototype an instance of Object constructor: ${Set.prototype instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// console.log(Object.prototype);
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// console.log(Set.prototype.__proto__);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// console.log(Set.prototype.__proto__ === Object.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// console.log(typeof Object.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
//
// console.log(Object.prototype.__proto__);
//
// console.log("..............................");
