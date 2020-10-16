// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 11- Custom Constructors
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
//
// var laptop = {
//   processor: "i5",
//   ram: "2GB",
//   storage: "0.5TB"
// };
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// /*
// var user = {
//   firstName: null,
//   lastName: null,
//   username: null,
//   email: null,
//   fullName: function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
// */
//
// function User(fstName, lstName, usrname, email){
//   this.firstName = fstName;
//   this.lastName = lstName;
//   this.username = usrname;
//   this.email = email;
//   this.fullName = function(){
//     return this.firstName + " " + this.lastName;
//   };
// }
//
// var user1 = new User("Ali", "Zaki", "AliZaki88", "alizaki@mail.com");
//
// console.log(user1);
// console.log(user1.fullName());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// /*
// var epic = {
//   name: null,
//   author: null,
//   language: null,
//   languageVerbose: function(){
//     return `${this.name} was written in ${this.language}.`
//   }
// }
// */
//
// function Epic(name, author, lang){
//   this.name = name;
//   this.author = author;
//   this.language = lang;
//   this.languageVerbose =  function(){
//     return `${this.name} was written in ${this.language}.`
//   }
// }
//
// var epic1 = new Epic("Mahabharata", "Vyasa", "Sanskrit");
// var epic2 = new Epic("Ramayana", "Valmiki", "Sanskrit");
//
// console.log(epic1);
// console.log(epic1.languageVerbose());
// console.log(".............................")
// console.log(epic2);
// console.log(epic2.languageVerbose());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// /*
// var video = {
//   length: null,
//   host: null,
//   category: null,
//   title: null,
//   language: null
// };
// */
//
// function Video(title, len, h, lang, cat){
//   this.title = title;
//   this.length = len;
//   this.host = h;
//   this.language = lang;
//   this.category = cat;
// }
//
// var video1 = new Video("Create a WordPress Theme", "30min", "Nawras Ali", "Arabic", "Education");
//
// console.log(video1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// /*
// var programmingLanguage = {
//   name: null,
//   os: null,
//   filenameExtension: null
//   stableRelease: null,
//   stableReleaseVerbose: function(){
//     return `The stable release of ${this.name} is ${this.stableRelease}.`;
//   }
// }
// */
//
// function Language(name, os, ext, stableRel){
//   this.name = name;
//   this.os = os;
//   this.extension = ext;
//   this.stableRelease = stableRel;
//   this.stableReleaseVerbose =  function(){
//     return `The stable release of ${this.name} is ${this.stableRelease}.`;
//   }
// }
//
// var lang1 = new Language("Python", "Linux, macOS, and Windows", "py", "3.8.3");
// var lang2 = new Language("PHP", "Unix-like, Windows", "php", "7.4.10");
//
// console.log(lang1);
// console.log(lang1.stableReleaseVerbose());
// console.log(".......................")
// console.log(lang2);
// console.log(lang2.stableReleaseVerbose());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// /*
// var book = {
//   weight: null,
//   pages: null
// };
// */
//
// function Book(weight, pages){
//   this.weight = weight;
//   this.pages = pages;
// }
//
// var book1 = new Book(0.2, 200);
//
// console.log(book1);
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
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(laptop1.constructor);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(laptop1 instanceof Laptop);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(laptop1 instanceof Object);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(Laptop instanceof Object);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(Laptop.prototype);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// function Laptop(proc, ram, stg){
//   this.processor = proc;
//   this.ram = ram;
//   this.storage = stg;
// }
//
// var laptop1 = new Laptop("i5", "2GB", "0.5TB");
// var laptop2 = new Laptop("i3", "2GB", "1TB");
// var laptop3 = new Laptop("i7", "8GB", "2TB");
//
// console.log(typeof Laptop.prototype);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// console.log(Date.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// console.log(typeof Date.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// console.log(Array.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// console.log(typeof Array.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// console.log(Object.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// console.log(typeof Object.prototype);
//
// console.log("..............................");
//
