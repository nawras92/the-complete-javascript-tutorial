// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 3
// Lesson: 7- The Spread Operator
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
// var arr1 = [1, 2, 3, 4];
//
// console.log(arr1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var arr2 = [5, 6, 7, 8, 9, 10];
//
// console.log(arr2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var arr1 = [1, 2, 3, 4];
// var arr2 = [5, 6, 7, 8, 9, 10];
//
// arr1.push(arr2);
//
// console.log(arr1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var arr1 = [1, 2, 3, 4];
// var arr2 = [5, 6, 7, 8, 9, 10];
//
// arr1 =  arr1.concat(arr2);
//
// console.log(arr1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var students1 = ["Ali", "Ola"];
// var students2 = ["Sami", "Sanad", "Jojo"];
//
// students1 = students1.concat(students2);
//
// console.log(students1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var salaries1 = [100, 500, 2000];
// var salaries2 = [2000, 4000, 700];
//
// salaries1 = salaries1.concat(salaries2);
//
// console.log(salaries1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// var salaries1 = [100, 500, 2000];
// var salaries2 = [2000, 4000, 700];
//
// salaries1 = [...salaries1, ...salaries2];
//
// console.log(salaries1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// var students1 = ["Ali", "Ola"];
// var students2 = ["Sami", "Sanad", "Jojo"];
//
// students1 = [...students1, ...students2];
//
// console.log(students1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// var arr1 = ["a", "b", "c", "d"];
// var arr2 = ["e", "f", "g"];
// var arr3 = ["I"];
//
// arr1 = [...arr1, ...arr2, ...arr3];
//
// console.log(arr1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var arr1 = [10, 20, 30, 40, 50];
// var arr2 = [...arr1];
//
// console.log(arr2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var salaries = [500, 600, 800, 700];
// var salariesCopy = [...salaries];
//
// console.log(salariesCopy);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var numbers = [5, 7, 99, 10, 0, 17];
// var minValue = Math.min(...numbers);
//
// console.log(minValue);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var numbers = [5, 7, 99, 10, 0, 17];
// var maxValue = Math.max(...numbers);
//
// console.log(maxValue);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var myArray = [5, 10, 60, 7, 8, 80, 100, 8, 9, 10, 20, 30, 40];
//
// var newArray = myArray.filter(value=>value > 30).map(val=>val*2);
// var minValue = Math.min(...newArray);
// var maxValue = Math.max(...newArray);
// var result = (minValue + maxValue) / 2;
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var arr = [7, 9, 0, 50, 8];
//
// var maxValue = Math.max(...arr.map(value=>value+5));
//
// console.log(maxValue);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var arr = [3, 4, 2, 0, 1];
//
// var result = arr.every(value => value < 5) ? Math.min(...arr) : Math.max(...arr);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// var arr = [35, 40, 20, 80, 70];
//
// var result = arr.every(value => value < 5) ? Math.min(...arr) : Math.max(...arr);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var arr = [-1, 8, -4, 0, 5];
//
// if(arr.some(value=>value<0)){
//   console.log(...arr)
// };
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var arr1 = [1, 5, 9, 10, 7];
// var arr2 = [8, 7, 10, 14, 11, 15];
//
// var result = ([...arr1, ...arr2].reduce((sum, value) => sum + value)) / (arr1.length + arr2.length);
//
// console.log(result);
//
// console.log("..............................");
