// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 6- Structural Types Part 1
// Last Update: 11-09-2020
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
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// console.log(`The type is: ${typeof phone}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// console.log(`The constructor is: ${phone.constructor}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var myObj = {};
//
// console.log(`The value is: ${myObj}`);
// console.log(`The type is: ${typeof myObj}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var myObj = new Object();
//
// console.log(`The value is: ${JSON.stringify(myObj)}`);
// console.log(`The type is: ${typeof myObj}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var myObj = new Object(null);
//
// console.log(`The object is: ${JSON.stringify(myObj)}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var myObj = new Object(undefined);
//
// console.log(`The object is: ${JSON.stringify(myObj)}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// /*
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
// */
//
// var phone = new Object();
// phone.os = "Andriod";
// phone.ram = "8GB";
// phone.storage = "512GB";
//
// console.log(`The object is: ${JSON.stringify(phone)}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// /*
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
// */
//
// var user = new Object();
// user.firstName = "Ali";
// user.lastName = "Zaki";
// user.username = "AliZaki88";
// user.email = "alizaki@mail.com";
//
// console.log(`The object is: ${JSON.stringify(user)}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// /*
// var video = {
//   length: "30min",
//   host: "Nawras Ali",
// };
// */
//
// var video = new Object();
// video.length = "30min";
// video.host = "Nawras Ali";
//
// console.log(`The object is: ${JSON.stringify(video)}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var phone = new Object();
// phone.os = "Andriod";
// phone.ram = "8GB";
// phone.storage = "512GB";
//
// console.log(`Is phone an instance of Object? ${phone instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var user = new Object();
// user.firstName = "Ali";
// user.lastName = "Zaki";
// user.username = "AliZaki88";
// user.email = "alizaki@mail.com";
//
// console.log(`Is user an instance of Object? ${user instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var video = new Object();
// video.length = "30min";
// video.host = "Nawras Ali";
//
// console.log(`Is video an instance of Object? ${video instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var numbers = [10, 11, 12, 13];
//
// console.log(`The value is: ${numbers}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var numbers = [10, 11, 12, 13];
//
// console.log(`The type is: ${typeof numbers}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var numbers = [10, 11, 12, 13];
//
// console.log(`The constructor is: ${numbers.constructor}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var numbers = new Array(10, 11, 12, 13);
//
// console.log(`The value is: ${numbers}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// /*
// var colors = ["red", "black", "green", "white"];
// */
//
// var colors = new Array("red", "black", "green", "white");
//
// console.log(`The value is: ${colors}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// /*
// var users = ["user1", "user2", "user3"];
// */
//
// var users = new Array("user1", "user2", "user3");
//
// console.log(`The value is: ${users}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// function displayHello(){
//   console.log("Hello");
// }
//
// displayHello();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// function displayHello(){
//   console.log("Hello");
// }
//
// console.log(`The type is: ${typeof displayHello}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// function displayHello(){
//   console.log("Hello");
// }
//
// console.log(`Is function instance of Object? ${displayHello instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// function displayHello(){
//   console.log("Hello");
// }
//
// console.log(`The constructor is: ${displayHello.constructor}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// var displayHello  = new Function('', 'console.log("Hello")');
//
// displayHello();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
//
// /*
// var mul = function(num1, num2){
//   return num1 * num2;
// };
// */
//
// var mul = new Function("num1", "num2", "return num1 * num2");
//
// console.log(mul(5, 10));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
//
// /*
// var boolValue = function(val){
//   return !!val;
// };
// */
//
// var boolValue = new Function("val", "return !!val");
//
// console.log(boolValue(undefined));
//
// console.log("..............................");
