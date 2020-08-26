// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 3
// Lesson: 5- Array Helpers Part 3
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
// var arr = [10, 20, 80, 150, 30, 0, 120];
// var anyValues = arr.some(value => value >= 50);
//
// console.log(anyValues);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var arr = [10, 20, 80, 150, 30, 0, 120];
// var firstElement = function(){
//   for(element of arr){
//     if (element >= 50){
//       return element;
//     }
//   }
// }();
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var arr = [10, 20, 80, 150, 30, 0, 120];
// var firstElement = arr.find(value => value >= 50);
//
// console.log(firstElement);
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var arr = [5, 3, 0, 40, 110, 7, 9];
// var firstElement = arr.find(function(value){
//   if(value > 5 && value < 10){
//     return value;
//   }
// });
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var arr = ["Hello", "Lala", "Ali", "Ola", "Let's see"];
// var firstElement = arr.find(function(value){
//   if(value.length < 4){
//     return value;
//   }
// });
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var arr = [3, 8, 2, 9, 4];
// var firstElement = arr.find(function(value, index){
//   return value == index;
// });
//
// console.log(firstElement);;
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// var arr = ["We go there", "I mean to venus", "Life there is a bit complicated", "but it can open new doors", "to the new world"];
//
// var firstElement = arr.find(function(value, index){
//      if(value.indexOf("v") !== -1){
//        return index;
//      }
// });
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// var arr = [5, 6, 7, 79, 99, 789];
// var firstElement = arr.find(value => value === 1);
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// var arr = [null, undefined, 0, 0, false, null, "", undefined, null, 0];
// var firstElement = arr.find(value => !!value);
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var arr = [null, undefined, 1, 0, 0, false, null, "", undefined, null, 0, 1, 5];
// var filteredArr = arr.filter(value => !!value);
//
// console.log(filteredArr);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var arr = [null, undefined, 1, 0, 0, false, null, "", undefined, null, 0, 1, 5];
// var filteredArr = arr.filter(value => !!value);
// var newArr = filteredArr.map(value => value * 10);
//
// console.log(newArr);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var arr = [null, undefined, 1, 0, 0, false, null, "", undefined, null, 0, 1, 5];
// var filteredArr = arr.filter(value => !!value);
// var newArr = filteredArr.map(value => value * 10);
// var firstElement = newArr.find(value => value >= 5);
//
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var arr = [null, undefined, 1, 0, 0, false, null, "", undefined, null, 0, 1, 5];
// var firstElement = arr.filter(value => !!value)
//                       .map(value => value * 10)
//                       .find(value => value >= 5);
//
//
// console.log(firstElement);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var arr = [1, 5, 10, 0, -8, 50, 7];
// var result = function(){
//   var sum = 0;
//   for(element of arr){
//     sum += element;
//   }
//   return sum;
// }();
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var arr = [1, 2, 5, 6];
// var result = function(){
//   var prod = 1;
//   for(element of arr){
//     prod *= element;
//   }
//   return sum;
// }();
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var arr = [1, 2, 5, 6];
// var result = function(){
//   var prod = 1;
//   for(element of arr){
//     prod *= element;
//   }
//   return prod;
// }();
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// var arr = [1, 2, 5, 6];
// var result = arr.reduce(function(prod, currentItem){
//   return prod * currentItem;
// }, 1);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var arr = [5, 6, 9, 10 , 0, 79];
// var result = arr.reduce((sub, val) => sub-val);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var arr = [5, 6, 9, 10 , 0, 79];
// var result = arr.reduce((sub, val) => sub-val, 200);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var arr = [1, 5, 10, 0, -8, 50, 7];
// var result = arr.reduce(function(sum, currentItem){
//   return sum + currentItem;
// }, 10);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// var arr = [1, 2, 5, 6];
// var result = arr.reduce(function(mul, currentItem){
//   return mul * currentItem;
// }, -8);
// console.log(result);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// var arr = [20, 50, 70, 80, 100, 151, 789, 0, 60];
// var newArr = arr.map(value => value /10);
//
// console.log(newArr);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// var arr = [20, 50, 70, 80, 100, 151, 789, 0, 60];
// var result = arr.map(value => value /10)
//                 .reduce((sum, value) => sum + value, 0);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// var arr = [20, 50, 70, 80, 100, 151, 789, 0, 60];
// var result = arr.map(value => value /10)
//                 .reduce((sum, value) => sum + value, 0)
//                 / arr.length;
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// var marks = [100, 200, 800, 600, 700, 0, 400, 900];
// var result = marks.reduce((sum, value)=> sum + value, 0) / marks.length;
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
// var arr = [1, null, 1, 0, undefined, 5, "Hello", false, 1, true, 2];
// var result = arr.filter(value => value === 1).reduce(function(sum,  currentItem){return sum + currentItem}, 0);
//
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
// var arr = [5, 7, 8, 9];
//
// var sum = arr.map(value => value * value).reduce((sum, value) => sum + value, 0);
//
// console.log(sum);
//
// console.log("..............................");
