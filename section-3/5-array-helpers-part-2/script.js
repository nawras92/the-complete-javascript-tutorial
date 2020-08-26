// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 3
// Lesson: 4- Array Helpers Part 2
// Last Update: 23-08-2020
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
// var arr = [5, 7, 0, 9, -88, 3, 6, 7];
// var newArr = arr.map(value => typeof value === "number" ? 1 : 0);
//
// console.log(newArr);
//
// //You can also add
// var count = 0;
// for (element of newArr){
//   count += element;
// }
// var allNumbers = count === newArr.length ? true : false;
// console.log(allNumbers);

// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var arr = [true, 5, 7, 0, null, 9, "value", -88, 3, 6, 7];
// var newArr = arr.map(value => typeof value === "number" ? 1 : 0);
//
// console.log(newArr);
//
// //You can also add
// var count = 0;
// for (element of newArr){
//   count += element;
// }
// var allNumbers = count === newArr.length ? true : false;
// console.log(allNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var arr = [5, 7, 0, 9, -88, 3, 6, 7];
//
// var allNumbers =  arr.every(value => typeof value === "number");
// console.log(allNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var arr = [true, 5, 7, 0, null, 9, "value", -88, 3, 6, 7];
//
// var allNumbers =  arr.every(value => typeof value === "number");
// console.log(allNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var arr = [10, 20, 5, 2, -8, 0, 55, 100];
// var all = arr.every(value => value > 20);
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var arr = [10, 20, 5, 2, -8, 0, 55, 100];
// var all = arr.every(value => value < 110);
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// var arr = [1, 1, 1, 0, 0, 1, 1, 1];
// var all = arr.every(value => value === 1);
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// var arr = [0, 0, 0, 0, 0];
// var all = arr.every(value => value === 0);
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// var arr = [0, 1, 2, 3, 4, 5];
// var all = arr.every(function(value, index){
//   return value == index;
// });
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var arr = [0, 2, 2, 7, 4, 5];
// var all = arr.every(function(value, index){
//   return value == index;
// });
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var names = ["Sami", "Sanad", "Ali", "Nawras", "Jad", "Ola", "JoJo", "Ahmed", "Lolo"];
// var all = names.every(name => name.length === 3);
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var names = ["Sami", "Sanad", "Ali", "Nawras", "Jad", "Ola", "Julia", "Ahmed", "Lala"];
// var all = names.every(name => name.toLowerCase().indexOf('a') !== -1 );
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var usersLoggedInArr = [true, false, true, true, true, false];
// var all = usersLoggedInArr.every(value => value === true);
//
// console.log(all);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var arr = [5, 7, 0, 9, -88, 3, 6, 7];
// var newArr = arr.map(value => typeof value === "number" ? 1 : 0);
//
// console.log(newArr);
//
// //You can also add
// var count = 0;
// for (element of newArr){
//   count += element;
// }
// var anyIsNumber = count > 0 ? true : false;
// console.log(anyIsNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var arr = [true, 5, 7, 0, null, 9, "value", -88, 3, 6, 7];
// var newArr = arr.map(value => typeof value === "number" ? 1 : 0);
//
// console.log(newArr);
//
// //You can also add
// var count = 0;
// for (element of newArr){
//   count += element;
// }
// var anyIsNumber = count > 0 ? true : false;
// console.log(anyIsNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var arr = ["hello", "Ali", false, null];
// var newArr = arr.map(value => typeof value === "number" ? 1 : 0);
//
// console.log(newArr);
//
// //You can also add
// var count = 0;
// for (element of newArr){
//   count += element;
// }
// var anyIsNumber = count > 0 ? true : false;
// console.log(anyIsNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// var arr = [5, 7, 0, 9, -88, 3, 6, 7];
// var anyIsNumber = arr.some(value => typeof value === "number");
//
// console.log(anyIsNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var arr = [true, 5, 7, 0, null, 9, "value", -88, 3, 6, 7];
// var anyIsNumber = arr.some(value => typeof value === "number");
//
// console.log(anyIsNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var arr = ["hello", "Ali", false, null];
// var anyIsNumber = arr.some(value => typeof value === "number");
//
// console.log(anyIsNumber);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var arr = [10, 20, 5, 2, -8, 0, 55, 100];
// var someElements = arr.some(value => value > 20);
//
// console.log(someElements);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// var arr = [10, 20, 5, 2, -8, 0, 55, 100];
// var someElements = arr.some(value => value < 110);
//
// console.log(someElements);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// var arr = [0, 2, 2, 7, 4, 5];
// var someElements = arr.some(function(value, index){
//   return value == index;
// });
//
// console.log(someElements);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// var names = ["Sami", "Sanad", "Nawras", "JoJo", "Ahmed", "Lolo"];
// var someElements = names.some(name => name.length === 3);
//
// console.log(someElements);
//
// console.log(someElements);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// var values = ["Hello", "well", "can we do it?", "now better than never"];
// var someElements = values.every(value => value.indexOf('z') !== -1 );
//
// console.log(someElements);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// var usersLoggedInArr = [true, false, true, true, true, false];
// var someElements = usersLoggedInArr.some(value => value === true);
//
// console.log(someElements);
//
// console.log("..............................");
