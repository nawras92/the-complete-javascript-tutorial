// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 5
// Lesson: 8- Extra Practice
// Last Update: 23-10-2020
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
// for(var i = 0; i <= 20; i = i + 2){
//   console.log(i);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var i = 5;
//
// for(var i = 0; i <= 20; i = i + 2){
//   console.log(i);
// }
// console.log("..........");
// console.log(i);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var i = 5;
//
// for(let i = 0; i <= 20; i = i + 2){
//   console.log(i);
// }
// console.log("..........");
// console.log(i);
//console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var users = ["user1", "user2", "user3", "user4"];
//
// for(var user of users){
//   console.log(user);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var users = ["user1", "user2", "user3", "user4"];
// var user = "Sanad";
//
// for(var user of users){
//   console.log(user);
// }
//
// console.log("...........");
// console.log(user);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var users = ["user1", "user2", "user3", "user4"];
// var user = "Sanad";
//
// for(let user of users){
//   console.log(user);
// }
//
// console.log("...........");
// console.log(user);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var myObj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
//
// for(var prop in myObj){
//   console.log(prop);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var myObj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
//
// var prop = "d";
//
// for(var prop in myObj){
//   console.log(prop);
// }
//
// console.log(".........");
// console.log(prop);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var myObj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
//
// var prop = "d";
//
// for(let prop in myObj){
//   console.log(prop);
// }
//
// console.log(".........");
// console.log(prop);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var user = "Jad";
// var id = 77;
//
// if(user === "Jad"){
//   var id = 54;
// }else{
//   var id = 44;
// }
//
// console.log(id);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var user = "Jad";
// var id = 77;
//
// if(user === "Jad"){
//   let id = 54;
// }else{
//   let id = 44;
// }
//
// console.log(id);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// const E = 2.7;
//
// console.log(E ** 0 + 1);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// const IDSTART = 45;
//
// for (let i = IDSTART; i < IDSTART + 4; i++){
//   console.log(i)
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// const PI = 3.14;
//
// console.log(2 * PI * 1);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// const ARR = ["user1", "user2", "user3"];
//
// function searchForUser(user, usersArr){
//   if(usersArr.indexOf(user) !== -1){
//     console.log("Found in your array.");
//   }else if(ARR.indexOf(user) !== -1){
//     console.log("Found in the default array.")
//   }else{
//     console.log("Sorry, the user is not registered with us.")
//   }
// }
//
// searchForUser("user5", ["user5", "user6", "user88"]);
// searchForUser("user1", ["user5", "user6", "user88"]);
// searchForUser("user200", ["user5", "user6", "user88"]);

// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// const ARR = ["user1", "user2", "user3"];
//
// function searchForUser(user, usersArr){
//   if(usersArr.indexOf(user) !== -1){
//     console.log("Found in your array.");
//   }else if(ARR.indexOf(user) !== -1){
//     console.log("Found in the default array.")
//   }else{
//     console.log("Sorry, the user is not registered with us.")
//   }
// }
//
// searchForUser("user5", ["user5", "user6", "user88"]);
// searchForUser("user1", ["user5", "user6", "user88"]);
// searchForUser("user200", ["user5", "user6", "user88"]);
//
// ARR.push("user899");
// ARR.push("user795");
// ARR.push("user200");
//
// console.log("................");
// searchForUser("user200", ["user5", "user6", "user88"]);
// console.log("..............................");
//
