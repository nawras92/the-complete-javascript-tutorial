// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 13- Prototypes Part 2
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
// var date = new Date();
//
// console.log(date.__proto__);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var date = new Date();
//
// console.log(date.__proto__ === Date.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var arr = new Array();
//
// console.log(arr.__proto__);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var arr = new Array();
//
// console.log(arr.__proto__ === Array.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var func = new Function();
//
// console.log(func.__proto__);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var func = new Function();
//
// console.log(func.__proto__ === Function.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
//
// console.log(laptop1.__proto__);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
//
// console.log(laptop1.__proto__ === Laptop.prototype);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// function Book(weight, pages){
//   this.weight = weight;
//   this.pages = pages;
// }
//
// var book1 = new Book(0.2, 200);
//
// console.log(book1.__proto__);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function Book(weight, pages){
//   this.weight = weight;
//   this.pages = pages;
// }
//
// var book1 = new Book(0.2, 200);
//
// console.log(book1.__proto__ === Book.prototype);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var user = {
//   firstName: "Ola",
//   lastName: "Rasi"
// }
//
// user.fullName = function(){
//   return (this.firstName + " " + this.lastName);
// }
//
// console.log(user.fullName())
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// /*
// var user = {
//   firstName: null,
//   lastName: null,
// }
// */
//
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// var user1 = new User("Ola", "Rasi");
//
// console.log(user1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// console.log(User.prototype);
// console.log(typeof User.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// User.prototype.groupId = 57;
//
// console.log(User.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// User.prototype.groupId = 57;
//
// var user1 = new User("Ola", "Rasi");
// var user2 = new User("Ali", "Zaki");
// var user3 = new User("Nawras", "Ali");
//
// console.log(user1);
// console.log(user2);
// console.log(user3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// User.prototype.groupId = 57;
//
// var user1 = new User("Ola", "Rasi");
// var user2 = new User("Ali", "Zaki");
// var user3 = new User("Nawras", "Ali");
//
// console.log(user1.groupId);
// console.log(user2.groupId);
// console.log(user3.groupId);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// function Epic(name, author, lang){
//   this.name = name;
//   this.author = author;
//   this.language = lang;
// }
//
// Epic.prototype.languageVerbose = function(){
//     return `${this.name} was written in ${this.language}.`
// }
//
// var epic1 = new Epic("Mahabharata", "Vyasa", "Sanskrit");
// var epic2 = new Epic("Ramayana", "Valmiki", "Sanskrit");
//
// console.log(epic1.languageVerbose());
// console.log(".............................")
// console.log(epic2.languageVerbose());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// function Video(title, lang){
//   this.title = title;
//   this.language = lang;
// }
//
// Video.prototype.category = "Education";
//
// var video1 = new Video("Create a WordPress Theme", "Arabic");
// var video2 = new Video("What is FSF?", "Arabic");
// var video3 = new Video("Learn JavaScript in 15 Minutes", "Arabic");
//
// console.log(video1, video1.category);
// console.log(video2, video2.category);
// console.log(video3, video3.category);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// function MarkerPen(color, price){
//   this.color = color;
//   this.price = price;
// }
//
// MarkerPen.prototype.brand = "Claro";
//
// var markerPen1 = new MarkerPen("red", "2USD");
// var markerPen2 = new MarkerPen("Blue", "2.2USD");
//
// console.log(markerPen1, markerPen1.brand);
// console.log(markerPen2, markerPen2.brand);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// function Section(title, desc){
//     this.title = title;
//     this.description = desc;
// }
//
// Section.prototype.course = "JavaScript Course";
//
// var section1 = new Section("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.");
// var section2 = new Section("JavaScript Functions", "Introduction to JavaScript functions and closures.");
// var section3 = new Section("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.");
//
//
// console.log(section1);
// console.log(section1.course);
// console.log("................")
// console.log(section2);
// console.log(section2.course);
// console.log("................")
// console.log(section3);
// console.log(section3.course);
//
//
// console.log("..............................");
//
