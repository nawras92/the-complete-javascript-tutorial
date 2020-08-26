// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 3
// Lesson: 3- Display Array Items
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
// var numbers = [1, 2, 3];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var numbers = [1, 2, 3];
// for(var i =0; i<3; i++){
//   console.log(numbers[i]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var colors = ["red", "green", "white", "black"];
// for(var i =0; i < colors.length; i++){
//   console.log(colors[i]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
// for(var i =0; i < items.length; i++){
//   console.log(items[i]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var thingsToDo = ["meditate", "go to gym", "watch a video", "have a healthy meal"];
// for(var i =0; i < thingsToDo.length; i++){
//   console.log(thingsToDo[i]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var thingsToBuy = ["papers", "bread", "2 pencils", "perfume", "milk"];
// for(var i =0; i < thingsToBuy.length; i++){
//   console.log(thingsToBuy[i]);
// };
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// var myWorkEthics = ["Concentrate", "Wait for no result", "Trust your Karma"];
// for(item of myWorkEthics){
//   console.log(item);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// var numbers = [1, 2, 3];
// for(number of numbers){
//   console.log(number);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// var colors = ["red", "green", "white", "black"];
// for(color of colors){
//   console.log(color);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
// for(item of items){
//   console.log(item);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var thingsToDo = ["meditate", "go to gym", "watch a video", "have a healthy meal"];
// for(thingToDo of thingsToDo){
//   console.log(thingToDo);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var thingsToBuy = ["papers", "bread", "2 pencils", "perfume", "milk"];
// for(thingToBuy of thingsToBuy){
//   console.log(thingToBuy);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var numbers = [100, 200, 300, 400, 500];
// numbers.forEach(function(currentItem, index, array){
//   console.log(index, currentItem, array);
// });
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var colors = ["red", "green", "white", "black"];
// colors.forEach(function(current){
//   console.log(current);
// });
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
// items.forEach(function(item){
//   console.log(item);
// });
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var thingsToDo = ["meditate", "go to gym", "watch a video", "have a healthy meal"];
// thingsToDo.forEach(function(thing){
//   console.log(thing);
// });
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// var thingsToBuy = ["papers", "bread", "2 pencils", "perfume", "milk"];
// thingsToBuy.forEach(thing => console.log(thing));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var days =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// days.forEach(function(day, dayIndex){
//    console.log(dayIndex, day);
// });
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var days =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// days.forEach((day, dayIndex) => console.log(dayIndex, day));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];
//
// months.forEach(month => console.log(month));
//
// console.log("..............................");
//
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// var days =  ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// var forEachReturn = days.forEach((day, dayIndex) => console.log(dayIndex, day));
//
// console.log(forEachReturn);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];
//
// var forEachReturn = months.forEach(month => console.log(month));
//
// console.log(forEachReturn);
//
// console.log("..............................");
