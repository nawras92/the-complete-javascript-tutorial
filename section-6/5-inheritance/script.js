// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 5- Inheritance
// Last Update: 10-11-2020
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
// class Person{
//
//   /* Constructor */
//   constructor(name, weight, height){
//     this.name = name;
//     this.weight = weight; // in KG
//     this.height = height; // in cm
//   }
//
//   /* Methods */
//
//   /*Height in meters*/
//   heightInMeter(){
//     return this.height / 100;
//   }
//
//   /*Calculate Body Mass Index -BMI- */
//   bmi(){
//     return this.weight / (this.heightInMeter() ** 2);
//   }
// }
//
// let person = new Person("Ali", 72, 180);
// console.log(person.bmi());
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
//   constructor(name, weight, height){
//     this.name = name;
//     this.weight = weight; // in KG
//     this.height = height; // in cm
//   }
//
//   /* Methods */
//
//   //Height in meters
//   heightInMeter(){
//     return this.height / 100;
//   }
//
//   //Calculate Body Mass Index -BMI-
//   bmi(){
//     return this.weight / (this.heightInMeter() ** 2);
//   }
//
//   //Generate a random integer between 0 and 100
//   randomNumber(){
//     return Math.floor(Math.random() * 100)
//   }
//   //Generate username
//   genTemporaryUsername(){
//     return this.name + this.randomNumber();
//   }
// }
//
// let user = new User("Sanad", 80, 190);
// console.log(user);
// console.log(user.bmi());
// console.log(user.genTemporaryUsername());
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// class Person{
//
//   /* Constructor */
//   constructor(name, weight, height){
//     this.name = name;
//     this.weight = weight; // in KG
//     this.height = height; // in cm
//   }
//
//   /* Methods */
//
//   //Height in meters
//   heightInMeter(){
//     return this.height / 100;
//   }
//
//   //Calculate Body Mass Index -BMI-
//   bmi(){
//     return this.weight / (this.heightInMeter() ** 2);
//   }
// }
//
// class User extends Person{
//
//   /*Methods*/
//   //Generate a random integer between 0 and 100
//   randomNumber(){
//     return Math.floor(Math.random() * 100)
//   }
//   //Generate username
//   genTemporaryUsername(){
//     return this.name + this.randomNumber();
//   }
// }
//
// let user = new User("Sanad", 80, 190);
// console.log(user);
// console.log(user.bmi());
// console.log(user.genTemporaryUsername());
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// class Shape{
//
//   /* Constructor */
//   constructor(name, sides){
//     this.name = name;
//     this.sides = sides;
//   }
//
//  /* Methods */
//  circumference(...sidesLength){
//    return sidesLength.reduce((a, b) => a + b, 0);
//  }
// }
//
// let shape1 = new Shape("Triangle", 3);
// let shape2 = new Shape("Rectangular", 4);
// let shape3 = new Shape("Square", 4);
//
// console.log(shape1.circumference(5, 6, 7));
// console.log(shape2.circumference(2, 4, 2, 4));
// console.log(shape3.circumference(10, 10, 10, 10));
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// class Square{
//
//   /* Constructor */
//   constructor(name, sides){
//     this.name = name;
//     this.sides = sides;
//   }
//
//  /* Methods */
//  circumference(...sidesLength){
//    return sidesLength.reduce((a, b) => a + b, 0);
//  }
//  area(height){
//    return height * height;
//  }
// }
//
// let sq1 = new Square("Square", 4);
// let sq2 = new Square("Square", 4);
//
// console.log(sq1.circumference(10, 10, 10, 10), sq1.area(10));
// console.log(sq2.circumference(8, 8, 8, 8), sq1.area(8));
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// class Shape{
//
//   /* Constructor */
//   constructor(name, sides){
//     this.name = name;
//     this.sides = sides;
//   }
//
//  /* Methods */
//  circumference(...sidesLength){
//    return sidesLength.reduce((a, b) => a + b, 0);
//  }
// }
//
// class Square extends Shape{
//
//   /* Methods */
//  area(sideLength){
//    return sideLength * sideLength;
//  }
// }
//
// let sq1 = new Square("Square", 4);
// let sq2 = new Square("Square", 4);
//
// console.log(sq1.circumference(10, 10, 10, 10), sq1.area(10));
// console.log(sq2.circumference(8, 8, 8, 8), sq1.area(8));
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// /*
// let language = {
//   name: null,
//   type: null,
//   info: function(){
//     return `${this.name} is a ${this.type}.`
//   }
// }
// */
//
// class Language{
//
//   /* Constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   info(){
//     return `${this.name} is a ${this.type} language.`
//   }
// }
//
// let lang1 = new Language("Arabic", "human");
// let lang2 = new Language("Python", "programming");
//
// console.log(lang1.info());
// console.log(lang2.info());
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// /*
// let programmingLanguage = {
//   name: null,
//   type: null,
//   info: function(){
//     return `${this.name} is a ${this.type}.`
//   },
//   moreInfo: function(designer, firstAppeared){
//     return `${this.name} was created by ${designer} in ${firstAppeared}`;
//   }
// }
// */
//
// class ProgrammingLanguage{
//
//   /* Constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   info(){
//     return `${this.name} is a ${this.type} language.`
//   }
//   moreInfo(designer, firstAppeared){
//     return `${this.name} was created by ${designer} in ${firstAppeared}`;
//   }
// }
//
// let lang1 = new ProgrammingLanguage("Ruby", "programming");
// let lang2 = new ProgrammingLanguage("Python", "programming");
//
// console.log(lang1.info());
// console.log(lang1.moreInfo("Yukihiro Matsumoto", 1995));
// console.log(".................");
// console.log(lang2.info());
// console.log(lang2.moreInfo("Guido van Rossum", 1991));
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// class Language{
//
//   /* Constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   info(){
//     return `${this.name} is a ${this.type} language.`
//   }
// }
//
// class ProgrammingLanguage extends Language{
//
//   /* Methods */
//   moreInfo(designer, firstAppeared){
//     return `${this.name} was created by ${designer} in ${firstAppeared}`;
//   }
// }
//
// let lang1 = new ProgrammingLanguage("Ruby", "programming");
// let lang2 = new ProgrammingLanguage("Python", "programming");
//
// console.log(lang1.info());
// console.log(lang1.moreInfo("Yukihiro Matsumoto", 1995));
// console.log(".................");
// console.log(lang2.info());
// console.log(lang2.moreInfo("Guido van Rossum", 1991));
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// class Language{
//
//   /* Constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   info(){
//     return `${this.name} is a ${this.type} language.`
//   }
// }
//
// class ProgrammingLanguage extends Language{
//
//   /* Methods */
//   info(designer, firstAppeared){
//     return `${this.name} was created by ${designer} in ${firstAppeared}`;
//   }
// }
//
// let lang1 = new ProgrammingLanguage("Ruby", "programming");
// let lang2 = new ProgrammingLanguage("Python", "programming");
// let lang3 = new Language("Arabic", "human");
// let lang4 = new Language("Sanskrit", "human");
//
// console.log(lang1.info("Yukihiro Matsumoto", 1995));
// console.log(lang2.info("Guido van Rossum", 1991));
// console.log(".................");
// console.log(lang3.info());
// console.log(lang4.info());
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// /*
// let website = {
//   name: null,
//   type: null,
//   grantAccess: function(location){
//     return location !== "Jordan" ? "not allowed" : "allowed";
//   }
// }
// */
//
// class Website{
//
//   /* constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   grantAccess(location){
//     return location !== "Jordan" ? "not allowed" : "allowed";
//   }
// }
//
// let website1 = new Website("Government Online", "government website");
// let website2 = new Website("My school", "educational");
//
// console.log(website1.grantAccess("Jordan"));
// console.log(website2.grantAccess("USA"));
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// /*
// let blog = {
//   name: null,
//   type: null,
//   grantAccess: function(location){
//     return location !== "Jordan" ? "not allowed" : "allowed";
//   },
//   welcomeMessage: function(){
//     return `Welcome everyone to my blog. Hope you enjoy your time reading my awesome content.`;
//   }
// }
// */
//
// class Blog{
//
//   /* constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   grantAccess(location){
//     return location !== "Jordan" ? "not allowed" : "allowed";
//   }
//   welcomeMessage(){
//     return `Welcome everyone to my blog. Hope you enjoy your time reading my awesome content.`;
//   }
// }
//
// let blog1 = new Blog("Learn With Naw Blog", "blog");
// let blog2 = new Blog("Linux Blog", "blog");
//
// console.log(blog1);
// console.log(blog1.grantAccess("Palestine"));
// console.log(blog1.welcomeMessage());
// console.log("..............")
// console.log(blog2);
// console.log(blog2.grantAccess("Iraq"));
// console.log(blog2.welcomeMessage());
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// class Website{
//
//   /* constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   grantAccess(location){
//     return location !== "Jordan" ? "not allowed" : "allowed";
//   }
// }
//
// class Blog extends Website{
//
//   /* Methods */
//   welcomeMessage(){
//     return `Welcome everyone to my blog. Hope you enjoy your time reading my awesome content.`;
//   }
// }
//
// let blog1 = new Blog("Learn With Naw Blog", "blog");
// let blog2 = new Blog("Linux Blog", "blog");
//
// console.log(blog1);
// console.log(blog1.grantAccess("Palestine"));
// console.log(blog1.welcomeMessage());
// console.log("..............")
// console.log(blog2);
// console.log(blog2.grantAccess("Iraq"));
// console.log(blog2.welcomeMessage());
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// /*
// grantAccess(){
//   return "All the countries are allowed";
// }
// */
//
// class Website{
//
//   /* constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
//
//   /* Methods */
//   grantAccess(location){
//     return location !== "Jordan" ? "not allowed" : "allowed";
//   }
// }
//
// class Blog extends Website{
//
//   /* Methods */
//   welcomeMessage(){
//     return `Welcome everyone to my blog. Hope you enjoy your time reading my awesome content.`;
//   }
//   grantAccess(){
//     return "All the countries are allowed";
//   }
// }
//
// let website1 = new Website("College Website", "educational");
// let website2 = new Website("Local Restaurant", "local business");
// let blog1 = new Blog("Learn With Naw Blog", "blog");
// let blog2 = new Blog("Linux Blog", "blog");
//
//
// console.log(website1.grantAccess("Palestine"));
// console.log(website2.grantAccess("Iraq"));
// console.log("..............")
// console.log(blog1.grantAccess("Palestine"));
// console.log(blog2.grantAccess("Iraq"));
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// /*
// let theme = {
//   name: null,
//   domain: null,
//   author: null,
//   backgroundColor: function(){
//     return "Set the background elements to red";
//   }
// }
// */
//
// class Theme{
//
//   /* constructor */
//   constructor(name, domain, author){
//     this.name = name;
//     this.domain = name;
//     this.author = author;
//   }
//
//   /* Methods */
//   backgroundColor(){
//     return "Set the background elements to red";
//   }
// }
//
// let theme1 = new Theme("Learn With Naw", "learn-with-naw", "Nawras");
//
// console.log(theme1.backgroundColor());
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// /*
// let childTheme = {
//   name: null,
//   domain: null,
//   author: null,
//   backgroundColor: function(){
//     return "Set the background elements to blue";
//   }
// }
// */
//
// class ChildTheme{
//
//   /* constructor */
//   constructor(name, domain, author){
//     this.name = name;
//     this.domain = name;
//     this.author = author;
//   }
//
//   /* Methods */
//   backgroundColor(){
//     return "Set the background elements to blue";
//   }
// }
//
// let childTheme1 = new ChildTheme("Learn With Naw Child", "learn-with-naw-child", "Nawras");
//
// console.log(childTheme1.backgroundColor());
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// class Theme{
//
//   /* constructor */
//   constructor(name, domain, author){
//     this.name = name;
//     this.domain = name;
//     this.author = author;
//   }
//
//   /* Methods */
//   backgroundColor(){
//     return "Set the background elements to red";
//   }
// }
//
// class ChildTheme extends Theme{
//
//   /* Methods */
//   backgroundColor(){
//     return "Set the background elements to blue";
//   }
// }
//
// let childTheme1 = new ChildTheme("Learn With Naw Child", "learn-with-naw-child", "Nawras");
//
// console.log(childTheme1.backgroundColor());
// console.log("..............................");
//
