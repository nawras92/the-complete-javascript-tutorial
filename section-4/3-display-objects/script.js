// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 3- Display Objects
// Last Update: 01-09-2020
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
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// console.log(user.username);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// console.log(user.address);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var markerPen = {
//   color: "red"
// };
//
// console.log(markerPen.color);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var markerPen = {
//   color: "red"
// };
//
// console.log(markerPen.brand);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// console.log(phone.display);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// var hasUsernameProperty =  user.username !==
// undefined;
//
// console.log(hasUsernameProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// var hasAddressProperty =  user.address !==
// undefined;
//
// console.log(hasAddressProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var markerPen = {
//   color: "red"
// };
//
// var hasColorProperty =  markerPen.color !==
// undefined;
//
// console.log(hasColorProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var markerPen = {
//   color: "red"
// };
//
// var hasBrandProperty =  markerPen.brand !==
// undefined;
//
// console.log(hasBrandProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// var hasDisplayProperty =  phone.display !==
// undefined;
//
// console.log(hasDisplayProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// var hasUsernameProperty =  user.hasOwnProperty("username");
//
// console.log(hasUsernameProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// var hasAddressProperty =  user.hasOwnProperty("address");
//
// console.log(hasAddressProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var markerPen = {
//   color: "red"
// };
//
// var hasColorProperty =  markerPen.hasOwnProperty("color");
//
// console.log(hasColorProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var markerPen = {
//   color: "red"
// };
//
// var hasBrandProperty =  markerPen.hasOwnProperty("brand");
//
// console.log(hasBrandProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// var hasDisplayProperty =  phone.hasOwnProperty("display");
//
// console.log(hasDisplayProperty);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var video = {
//   length: "30min",
//   host: "Nawras Ali",
//   category: "Education",
//   title: "Create a WordPress Theme",
//   language: "Arabic"
// };
//
// for(var property in video){
//   console.log(property)
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var book = {
//   weight: 0.5,
//   pages: 500
// };
//
// for(var prop in book){
//   console.log(prop);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// for(var characteristic in user){
//   console.log(characteristic);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// for(var prop in user){
//   console.log(user[prop]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// for(var prop in phone){
//   console.log(phone[prop]);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// var markerPen = {
//   color: "red",
//   brand: "Claro"
// };
//
// for(var property in markerPen){
//   console.log(property + " : " + markerPen[property]);
// }
//
// console.log("..............................");
