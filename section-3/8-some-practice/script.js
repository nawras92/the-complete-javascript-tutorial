// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 3
// Lesson: 8- Some Practice
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
// var numbers = [1, 5, 9, 10];
//
// console.log(Array.isArray(numbers));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var names = "Nawras Ali";
//
// console.log(Array.isArray(names));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var mark = 200;
//
// console.log(Array.isArray(mark));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var students = ["Jojo"];
//
// console.log(Array.isArray(students));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var numbers = [9, 7, 14, 80, 19];
//
// var res = Array.isArray(numbers) ? Math.min(...numbers) : numbers;
//
// console.log(res);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var mark = 800;
//
// var res = Array.isArray(mark) ? mark.reduce((sum, val) => sum + val) : mark + 25;
//
// console.log(res);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// var mark = [800];
//
// var res =  Array.isArray(mark) ? mark.map(val => val * 5) : mark;
//
// console.log(res);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// var numbers = [5, 8, 10];
//
// if(Array.isArray(numbers)){
//   var res = numbers.reduce((sum, val)=> sum + val);
//   console.log(res);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// var salaries = [100, 500, 700, 200];
//
// if(Array.isArray(salaries)){
//   var reversedArr = salaries.reverse();
//
// }
// console.log(reversedArr);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var arr = ["Hello", "world", "in", "reverse"];
//
// console.log(arr.reverse())
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var saying = ["You", "can", "do", "it"];
//
// var sayingReversed = saying.reverse();
//
// console.log("Original array: " + saying);
// console.log("Reversed array: " + sayingReversed);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var saying = ["You", "can", "do", "it"];
//
// var sayingCopy = [...saying];
// var sayingCopyReversed = sayingCopy.reverse();
//
// console.log("Original array: " + saying);
// console.log("Reversed array: " + sayingCopyReversed);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var arr = [5, 7, 9, 10, 0, 15];
//
// var res = [...arr].reverse().map(val=>val+2).reduce((sum, val)=> sum+val);
//
// console.log(res);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var arr =  [1, 2, 3, 4, 5, 6];
//
// var minValue = Math.min(...[...arr].reverse().map(val=>val/10));
// var maxValue = Math.max(...[...arr].reverse().map(val=>val/10));
//
// console.log(minValue, maxValue);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var numbers = [7, 9, 1, 0, 6, 5, 8, 4, 2, 3];
//
// var sortedNumbers = numbers.sort();
//
// console.log(sortedNumbers);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var words = ["Elephant", "Zebra", "Tiger", "Lion"];
//
// var wordsSorted =  words.sort();
//
// console.log(wordsSorted);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// var quote = ["Arise", "awake", "and", "don't", "stop", "until", "the", "goal", "is", "reached."];
//
// var quoteSorted = quote.reverse();
//
// console.log("Original array: " + quote);
// console.log("Sorted array: " + quoteSorted);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var arr = [8, 7, 6, 0, 10];
//
// var sortedArr = [...arr].sort();
//
// console.log("Original array: " + arr);
// console.log("Sorted array: " + sortedArr);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var arr = [8, 10, 6, 78, 10];
//
// console.log([...arr].sort().map(value=>value*2.5));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var arr = [80, 47, 46, 25];
//
// var avg = ([...arr].sort().map(val=>val+1).reduce((sum,val)=>val+sum))/arr.length;
//
// console.log(avg);
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// var values = [50, 70, 5, 25, 0, 0, 12, 100, 80, 80, 88, 90, 13, 14, 44];
//
// if (Array.isArray(values)){
//   var valuesSorted = [...values].sort();
//   var highValues = valuesSorted.filter(value=>value>50);
//   var lowValues = valuesSorted.filter(value=>value<=50);
//
//   if(lowValues.some(val=>val===0)){
//     lowValues = lowValues.map(val=>val+1);
//   }
//
//   if(highValues.every(val=>val===70)){
//     highValues = highValues.map(val=>val/5);
//   }
//
//   var newArr = [...lowValues, ...highValues].reverse();
//
//   var avg = newArr.reduce((val, sum)=>val+sum)/newArr.length;
//
//   console.log(newArr);
//   console.log(avg);
// }
//
// console.log("..............................");
