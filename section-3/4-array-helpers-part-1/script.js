// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 3
// Lesson: 4- Array Helpers Part 1
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
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function(num, numIndex){
//   numbers[numIndex] = num + 1;
// });
//
// console.log(numbers);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((num, numIndex) => numbers[numIndex] = num * num);
//
// console.log(numbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.map(function(num, numIndex){
//   numbers[numIndex] = num + 1;
// });
//
// console.log(numbers);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.map((num, numIndex) => numbers[numIndex] = num * num);
//
// console.log(numbers);

// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var numbers = [10, 20, 30, 40, 50];
// var newNumbers = numbers.map(num => num + 4);
//
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// var numbers = [10, 20, 30, 40, 50];
// var newNumbers = numbers.map(num => num + 4);
//
// console.log(numbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// var numbers = [55, 7, 81, 4515, 479, 10];
// var newNumbers = numbers.map(num => num * 10);
//
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// var numbers = [55, 7, 81, 4515, 479, 10];
// var newNumbers = numbers.forEach(num => num * 10);
//
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var numbers = [55, 7, 81, 4515, 479, 10];
// var newNumbers = [];
//
// numbers.forEach((num, numIndex) => newNumbers[numIndex] = num * 10);
//
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var numbers = [580, 710, 10, 45, 781, 12];
// var newNumbers = numbers.map(num => ((num % 2) === 0 ? num : "not even"));
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var numbers = [580, 710, 10, 45, 781, 12];
// var newNumbers = numbers.map(num => ((num % 2) !== 0 ? num : "not odd"));
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var numbers = [580, 710, 10, 45, 781, 12];
// var newNumbers = numbers.filter(num => (num % 2 === 0));
//
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var numbers = [580, 710, 10, 45, 781, 12];
// var newNumbers = numbers.filter(num => (num % 2 !== 0 ));
//
// console.log(newNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var names = ["Sami", "Sanad", "Ali", "Nawras", "Jad", "Ola", "JoJo", "Ahmed", "Lolo"];
// var shortNames = names.filter(function(name){
//        return name.length === 3;
// });
//
// console.log(shortNames);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var values = ["value1", undefined, "val9", null, false, true, 87];
// var trueValues = values.filter(value => !!value);
//
// console.log(trueValues);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// var values = ["value1", undefined, "val9", null, false, true, 87];
// var falseValues = values.filter(value => !value);
//
// console.log(falseValues);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var numbers = [5, 2, 1, 5, 87, 1, 9, 100, 10, 0, 1];
// var ones = numbers.filter(num =>  num === 1);
//
// console.log(ones);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var numbers = [5, 2, 1, 5, 87, 1, 9, 100, 10, 0, 1, 0, 1, 0];
// var zeros = numbers.filter(num =>  num === 0);
//
// console.log(zeros);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var numbers = [5, 2, 1, 5, 87, 1, 9, 100, 10, 0, 1, 0, 1, 0];
// var greatThan50 = numbers.filter(num =>  num > 50);
//
// console.log(greatThan50);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// var numbers = [5, 2, 1, -5, 87, -1, 9, 100, -10, 0, 1, 0, 1, 0];
// var positiveNumbers = numbers.filter(num =>  num >= 0);
//
// console.log(positiveNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// var numbers = [5, 2, 1, -5, 87, -1, 9, 100, -10, 0, 1, 0, 1, 0];
// var negativeNumbers = numbers.filter(num =>  num < 0);
//
// console.log(negativeNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// var values = ["null", 0, "Something", "undefined", null, false, true, null, "not to include", undefined, undefined];
// var newValues = values.filter(function(value){
//   return (value !== null);
// });
//
// console.log(newValues);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// var values = ["null", 0, "Something", "undefined", null, false, true, null, "not to include", undefined, undefined];
// var newValues = values.filter(function(value){
//   return (value !== undefined);
// });
//
// console.log(newValues);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// var values = ["null", 0, "Something", "undefined", null, false, true, null, "not to include", undefined, undefined];
// var newValues = values.filter(function(value){
//   return (value !== null);
// }).filter(value => value !== undefined);
//
// console.log(newValues);
//
// console.log("..............................");
