// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 1- Introduction to classes
// Last Update: 30-10-2020
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
// /*
// let user = {
//   firstName: null,
//   lastName: null,
//   email: null,
//   username: null
// };
// */
//
// function UserConstr(fn, ln, e, un){
//   this.firstName = fn;
//   this.lastName = ln;
//   this.email = e;
//   this.username = un;
// }
//
// let user1 = new UserConstr("Nawras", "Ali", "nawras@mail.com", "nawras77");
// let user2 = new UserConstr("Jad", "Fakhri", "jad@mail.com", "fakhri5");
//
// console.log(user1);
// console.log(user2);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// class User{
//
//   /* Constructor */
//   constructor(fn, ln, e, un){
//     this.firstName = fn;
//     this.lastName = ln;
//     this.email = e;
//     this.username = un;
//   }
//
// }
//
// let user1 = new User("Nawras", "Ali", "nawras@mail.com", "nawras77");
// let user2 = new User("Jad", "Fakhri", "jad@mail.com", "fakhri5");
//
// console.log(user1);
// console.log(user2);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// /*
// let laptop = {
//   processor: null,
//   ram: null,
//   storage: null
// }
// */
//
// class Laptop{
//   /* Constructor */
//   constructor(proc, ram, stg){
//     this.processor = proc;
//     this.ram = ram;
//     this.storage = stg;
//   }
// }
//
// let laptop1 = new Laptop("i5", "2GB", "0.5TB");
// let laptop2 = new Laptop("i3", "2GB", "1TB");
//
// console.log(laptop1);
// console.log(laptop2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// /*
// let epic = {
//   name: null;
//   author: null;
//   language: null;
// }
// */
//
// class Epic{
//   /*Constructor*/
//   constructor(name, author, lang){
//     this.name = name;
//     this.author = author;
//     this.language = lang;
//   }
// }
//
// let epic1 = new Epic("Mahabharata", "Vyasa", "Sanskrit");
// let epic2 = new Epic("Ramayana", "Valmiki", "Sanskrit");
//
// console.log(epic1);
// console.log(epic2);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// /*
// let video = {
//   title: null,
//   length: null,
//   host: null,
//   language: null,
//   category: null
// }
// */
//
// class Video{
//   /*Constructor*/
//   constructor(title, len, h, lang, cat){
//     this.title = title;
//     this.length = len;
//     this.host = h;
//     this.language = lang;
//     this.category = cat;
//   }
// }
//
// let video1 = new Video("Create a WordPress Theme", "30min", "Nawras Ali", "Arabic", "Education");
//
// console.log(video1);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// /*
// let language = {
//   name: null,
//   os: null,
//   extension: null,
//   stableRelease: null
// }
// */
//
// class Language{
//   /* Constructor */
//   constructor(name, os, ext, stableRel){
//     this.name = name;
//     this.os = os;
//     this.extension = ext;
//     this.stableRelease = stableRel;
//   }
// }
//
// let lang1 = new Language("Python", "Linux, macOS, and Windows", "py", "3.8.3");
// let lang2 = new Language("PHP", "Unix-like, Windows", "php", "7.4.10");
//
// console.log(lang1);
// console.log(lang2);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// /*
// let book = {
//   weight: null,
//   pages: null
// }
// */
//
// class Book{
//   /* Constructor */
//   constructor(weight, pages){
//     this.weight = weight;
//     this.pages = pages;
//   }
// }
//
// let book1 = new Book(0.2, 200);
// console.log(book1);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// /*
// let phone = {
//   os: null,
//   ram: null,
//   storage: null
// }
// */
//
// class Phone{
//   /* Constructor */
//   constructor(os, ram, stg){
//     this.os = os;
//     this.ram = ram;
//     this.storage = stg;
//   }
// }
//
// let phone1 = new Phone("Android", "2GB", "36GB");
//
// console.log(phone1);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
/*
// let markerPen = {
//   color: null,
//   price: null
// }
// */
//
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
// }
//
// let markerPen1 = new MarkerPen("red", "2USD");
// let markerPen2 = new MarkerPen("Blue", "2.2USD");
//
// console.log(markerPen1);
// console.log(markerPen2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// /*
// let section= {
//   title: null,
//   description: null
// }
// */
//
// class Section{
//   /* Constructor */
//   constructor(title, desc){
//     this.title = title;
//     this.description = desc;
//   }
// }
//
// let section1 = new Section("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.");
// let section2 = new Section("JavaScript Functions", "Introduction to JavaScript functions and closures.");
// let section3 = new Section("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.");
//
// console.log(section1);
// console.log(section2);
// console.log(section3);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// /*
// let song = {
//   title: null,
//   artist: null,
//   album: null
// }
// */
//
// class Song{
//   /* Constructor */
//   constructor(title, artist, album){
//       this.title = title;
//       this.artist = artist;
//       this.album = album
//   }
// }
//
// let song1 = new Song("Orobroy", "Dorantes", "PASSO A DUE");
// console.log(song1);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// function UserConstr(fn, ln, e, un){
//   this.firstName = fn;
//   this.lastName = ln;
//   this.email = e;
//   this.username = un;
//   this.fullName = function(){
//     return this.firstName + " " + this.lastName;
//   };
// }
//
// let user1 = new UserConstr("Nawras", "Ali", "nawras@mail.com", "nawras77");
// let user2 = new UserConstr("Jad", "Fakhri", "jad@mail.com", "fakhri5");
//
// console.log(user1.fullName());
// console.log(user2.fullName());
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// class User{
//   /* Constructor */
//   constructor(fn, ln, e, un){
//     this.firstName = fn;
//     this.lastName = ln;
//     this.email = e;
//     this.username = un;
//   }
//   /*Methods*/
//   fullName(){
//     return this.firstName + " " + this.lastName;
//   }
// }
//
// let user1 = new User("Nawras", "Ali", "nawras@mail.com", "nawras77");
// let user2 = new User("Jad", "Fakhri", "jad@mail.com", "fakhri5");
//
// console.log(user1.fullName());
// console.log(user2.fullName());
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// class Laptop{
//   /* Constructor */
//   constructor(proc, ram, ar, stg){
//     this.processor = proc;
//     this.ram = ram;
//     this.additionalRam = ar;
//     this.storage = stg;
//   }
//   /*Methods*/
//   totalRam(){
//     return this.ram + this.additionalRam;
//   }
// }
//
// let laptop1 = new Laptop("i5", 2, 4, "0.5TB");
// let laptop2 = new Laptop("i3", 2, 8, "1TB");
//
// console.log(laptop1.totalRam());
// console.log(laptop2.totalRam());
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// /*
// let epic = {
//   name: null;
//   author: null;
//   language: null;
//   info: function(){
//     return `${this.name} was written by ${this.author} in the ${this.language} language`;
//   }
// }
// */
//
// class Epic{
//   /*Constructor*/
//   constructor(name, author, lang){
//     this.name = name;
//     this.author = author;
//     this.language = lang;
//   }
//   /*Methods*/
//   info(){
//     return `${this.name} was written by ${this.author} in the ${this.language} language`;
//   }
// }
//
// let epic1 = new Epic("Mahabharata", "Vyasa", "Sanskrit");
// let epic2 = new Epic("Ramayana", "Valmiki", "Sanskrit");
//
// console.log(epic1.info());
// console.log(epic2.info());
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// /*
// let video = {
//   title: null,
//   length: null,
//   lengthInMinutes: function(){
//     return this.length / 60;
//   }
// }
// */
//
// class Video{
//   /*Constructor*/
//   constructor(title, len, h, lang, cat){
//     this.title = title;
//     this.length = len;
//   }
//   /* Methods */
//   lengthInMinutes(){
//     return this.length / 60;
//   }
// }
//
// let video1 = new Video("Create a WordPress Theme", "3000");
//
// console.log(video1.lengthInMinutes());
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// /*
// let video = {
//   title: null,
//   length: null,
//   lengthInMinutes: function(){
//     return this.length / 60;
//   },
//   lengthInHours: function(){
//     return this.length / 60 / 60;
//   },
// }
// */
//
// class Video{
//   /*Constructor*/
//   constructor(title, len, h, lang, cat){
//     this.title = title;
//     this.length = len;
//   }
//   /* Methods */
//   lengthInMinutes(){
//     return this.length / 60;
//   }
//   lengthInHours(){
//     return this.length / 60 / 60;
//   }
// }
//
// let video1 = new Video("Create a WordPress Theme", "3000");
//
// console.log(video1.lengthInHours());
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// /*
// let markerPen = {
//   color: null,
//   price: null,
//   tenItemsPrice: function(){
//     return this.price * 10 - this.price;
//   }
// }
// */
//
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
//   /*Methods*/
//   tenItemsPrice(){
//     return this.price * 10 - this.price;
//   }
// }
//
// let markerPen1 = new MarkerPen("red", 2);
// let markerPen2 = new MarkerPen("Blue", 2.2);
//
// console.log(markerPen1.tenItemsPrice());
// console.log(markerPen2.tenItemsPrice());
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// /*
// let markerPen = {
//   color: null,
//   price: null,
//   tenItemsPrice: function(){
//     return this.price * 10 - this.price;
//   },
//   twentyItemsPrice: function(){
//     return (this.price * 20) - (this.price * 2);
//   }
// }
// */
//
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
//   /*Methods*/
//   tenItemsPrice(){
//     return this.price * 10 - this.price;
//   }
//   twentyItemsPrice(){
//     return (this.price * 20) - (this.price * 2);
//   }
// }
//
// let markerPen1 = new MarkerPen("red", 2);
// let markerPen2 = new MarkerPen("Blue", 2.2);
//
// console.log(markerPen1.twentyItemsPrice());
// console.log(markerPen2.twentyItemsPrice());
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// /*
// let markerPen = {
//   color: null,
//   price: null,
//   tenItemsPrice: function(){
//     return this.price * 10 - this.price;
//   },
//   twentyItemsPrice: function(){
//     return (this.price * 20) - (this.price * 2);
//   },
//   fiftyItemsPrice: function(){
//     return (this.price * 50) - 15;
//   }
// }
// */
//
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
//   /*Methods*/
//   tenItemsPrice(){
//     return this.price * 10 - this.price;
//   }
//   twentyItemsPrice(){
//     return (this.price * 20) - (this.price * 2);
//   }
//   fiftyItemsPrice(){
//     return (this.price * 50) - 15;
//   }
// }
//
// let markerPen1 = new MarkerPen("red", 2);
// let markerPen2 = new MarkerPen("Blue", 2.2);
//
// console.log(markerPen1.fiftyItemsPrice());
// console.log(markerPen2.fiftyItemsPrice());
// console.log("..............................");
//
