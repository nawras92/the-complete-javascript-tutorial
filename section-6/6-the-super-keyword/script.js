// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 6- The super Keyword
// Last Update: 15-11-2020
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
// class Person{
//
//   /* Constructor */
//   constructor(fn, ln){
//     this.firstName = fn;
//     this.lastName = ln;
//   }
//
//   /* Methods */
//   fullName(){
//     return this.firstName + " " + this.lastName;
//   }
// }
//
// class User extends Person{
//
//   /* Methods */
//   prefix(p){
//     return p + " " + super.fullName();
//   }
// }
//
// let u1 = new User("Nawras", "Ali");
//
// console.log(u1.prefix("Ms."));
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// class Laptop{
//
//   /* Constructor */
//   constructor(ram, ar){
//     this.ram = ram;
//     this.additionalRam = ar;
//   }
//
//   /* Methods */
//   totalRam(){
//     return this.ram + this.additionalRam;
//   }
// }
//
// class SuperLaptop extends Laptop{
//
//   /* Methods */
//   upgradableRam(extendedRamSize){
//     return super.totalRam() + extendedRamSize;
//   }
// }
//
// let laptop1 = new SuperLaptop(2, 4);
//
// console.log(laptop1.upgradableRam(6));
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// /*
// let video = {
//   title: null,
//   category: null,
//   description: function(){
//     return "The is a generic video";
//   }
// };
//
// let shortVideo = {
//   title: null,
//   category: null,
//   info: function(){
//     return "This a generic video" + ", but it is a short video";
//   }
// }
// */
//
// class Video{
//
//   /*Constructor*/
//   constructor(title, category){
//     this.title = title;
//     this.category = category;
//   }
//
//   /* Methods */
//   description(){
//     return "The is a generic video";
//   }
// }
//
// class ShortVideo extends Video{
//
//   /* Methods */
//   info(){
//     return super.description() + ", but it is a short video";
//   }
// }
//
// let video1 = new ShortVideo("Create a WordPress Theme", "Education");
//
// console.log(video1.info());
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// /*
// let bundle = {
//   name: null,
//   noOfItems: null,
//   itemPrice: null,
//   bundlePrice: function(){
//     return (this.itemPrice  * noOfItems) - (this.itemPrice);
//   }
// };
//
// let premiumBundle = {
//   name: null,
//   noOfItems: null,
//   itemPrice: null,
//   premiumBundlePrice: function(){
//     return (this.itemPrice  * this.noOfItems) - (this.itemPrice) - 20;
//   }
// }
// */
//
// class Bundle{
//
//   /* constructor */
//   constructor(name, noOfItems, itemPrice){
//     this.name = name;
//     this.noOfItems = noOfItems;
//     this.itemPrice = itemPrice;
//   }
//
//   /* Methods */
//   bundlePrice(){
//     return (this.itemPrice  * this.noOfItems) - (this.itemPrice);
//   }
// }
//
// class PremiumBundle extends Bundle{
//
//   /* Methods */
//   premiumBundlePrice(){
//     return super.bundlePrice() - 20;
//   }
// }
//
// let b1 = new PremiumBundle("The complete bundle", 20, 2);
// console.log(b1.premiumBundlePrice());
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// class Person{
//
//   /* Static Properties */
//   static info = "This class provides basic information about a person.";
//
// }
//
// class User extends Person{
//
//   /* Static Properties */
//   static info = super.info + " It also displays the user information.";
//
// }
//
// console.log(Person.info);
// console.log(User.info);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// class Student{
//
//   /* Static Properties & Methods */
//   static passMark = 60;
// }
//
// class ForeignStudent extends Student{
//
//   /* Static Properties & Methods */
//   static passMark = super.passMark + 5;
// }
//
// console.log(Student.passMark);
// console.log(ForeignStudent.passMark);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// class Person{
//
//   /* constructor */
//   constructor(age){
//     this.age = age;
//   }
//
//   /* Static Properties */
//   static info = "This class provides basic information about a person.";
//
//   /* Static Methods */
//   static isOlderThan50(p){
//     return p.age > 50;
//   }
// }
//
// class User extends Person{
//
//   /* Static Properties */
//   static info = super.info + " It also displays the user information.";
//
//   /* Static Methods */
//   static salaryPromotion(u){
//     return super.isOlderThan50(u) ? 100 : 30;
//   }
// }
//
// let u1 = new User(51);
// let u2 = new User(35);
//
// console.log(User.salaryPromotion(u1));
// console.log(User.salaryPromotion(u2));
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// class Student{
//
//   /* Static Properties */
//   static passMark = 60;
//
//   /* Static Methods */
//   static sumOfAllMarks(avg, noOfStudents){
//     /*
//      avg: the average of all the students' marks
//      noOfStudents: the number of all the students.
//     */
//     return avg * noOfStudents;
//   }
// }
//
// class ForeignStudent extends Student{
//
//   /* Static Properties */
//   static passMark = super.passMark + 5;
//
//   /* Static Methods */
//   static foreignToAll(foreignAvg, fn, allAvg, all){
//     /*
//      foreignAvg: the average of the foreign students marks
//      fn: the number of the foreign students.
//      allAvg: the average of all the students' marks
//      all: the number of all the students.
//     */
//     let sum = foreignAvg * fn;
//     return (sum / super.sumOfAllMarks(allAvg, all)) * 100;
//   }
// }
//
// console.log(ForeignStudent.foreignToAll(70, 10, 80,100));
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// class Device{
//
//     /* Static Methods */
//     static docs(){
//       return `This is the documentation of the generic device`;
//     }
// }
//
// class WashingMachine extends Device{
//
//   /* Static Methods */
//   static howToUse(){
//     console.log("Before you use, please read the documentation of the generic device.");
//     console.log(super.docs());
//     return "Thank you!";
//   }
// }
//
// console.log(WashingMachine.howToUse());
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// class Item{
//
//   /* Static Properties */
//   static taxPercentage = 5;
//
// }
//
// class SubItem extends Item{
//
//   /* Static Properties */
//   static taxApplied = super.taxPercentage + 2 + "%";
//
// }
//
// console.log(SubItem.taxApplied);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// class Item{
//
//   /* Static Methods */
//   static appliedDiscount(){
//     return "50%";
//   };
// }
//
// class SubItem extends Item{
//
//   /* Static Methods */
//   static notifyAllUsers(){
//     return `The ${super.appliedDiscount()} discount is canceled`;
//   };
// }
//
// console.log(SubItem.notifyAllUsers());
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// class Shape{
//
//  /* Static Properties */
//  static whatIs = "deals with different geometric shapes";
//
// }
//
// class Square extends Shape{
//
//   /* Static Properties */
//   static info = "This class is an extension of the shape class, which " + super.whatIs;
//
// }
//
// console.log(Square.info);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// class Language{
//
//   /* Static Methods */
//   static about(name, type){
//     return `${name} is a ${type} language.`;
//   }
// }
//
// class ProgrammingLanguage extends Language{
//
//   /* Static Methods */
//   static info(name, type="programming"){
//     return super.about(name, type) + " Humans create programming languages";
//   }
// }
//
// console.log(ProgrammingLanguage.info("Python"));
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// class Website{
//
//   /* Static Methods */
//   static countriesAllowed(){
//     return "Iraq, Palestine, Kuwait, and Morocco";
//   }
// }
//
// class Blog extends Website{
//
//   /* Static Methods */
//   static welcomeMessage(){
//     return `People from ${super.countriesAllowed()} are the most welcomed here`;
//   }
// }
//
// console.log(Blog.welcomeMessage());
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// class Person{
//
//   /* Constructor */
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// }
//
// class User extends Person{
//
//   /* Constructor */
//   constructor(name, age, username){
//     super(name, age);
//     this.username = username;
//   }
// }
//
// let user = new User("Sanad", 18, "Sanad14");
//
// console.log(user.name);
// console.log(user.age);
// console.log(user.username);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// class Language{
//
//   /* Constructor */
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//   }
// }
//
// class ProgrammingLanguage extends Language{
//
//   /* Constructor */
//   constructor(name, designer, firstAppeared){
//     super(name);
//     this.designer = designer;
//     this.firstAppeared = firstAppeared;
//   }
// }
//
// let lang1 = new ProgrammingLanguage("Ruby", "Yukihiro Matsumoto", 1995);
// let lang2 = new ProgrammingLanguage("Python", "Guido van Rossum", 1991);
//
// console.log(lang1.name, lang1.designer, lang1.firstAppeared);
// console.log(lang2.name, lang2.designer, lang2.firstAppeared);

// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// /*
// let website = {
//   name: null;
//   type: null;
// }
//
// let blog = {
//   name: null;
//   type: null;
//   tarticlesNo: null;
//   isPublic: null;
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
// }
//
// class Blog extends Website{
//
//   /* constructor */
//   constructor(name, type, n, p){
//     super(name, type);
//     this.articlesNo = n;
//     this.isPublic = p;
//   }
// }
//
// let blog1 = new Blog("Learn With Naw", "blog", 150, true);
// let blog2 = new Blog("Linux", "blog", 800, false);
//
// console.log(blog1.name, blog1.type, blog1.articlesNo, blog1.isPublic);
// console.log(blog2.name, blog2.type, blog2.articlesNo, blog2.isPublic);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// /*
// let theme = {
//   name: null,
//   domain: null,
//   author: null
// }
//
// let childTheme = {
//   name: null,
//   domain: null,
//   author: null,
//   hasFrontPage: null,
//   isBlogTheme: null
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
// }
//
// class ChildTheme extends Theme{
//
//   /* constructor */
//   constructor(name, domain, author, hasFrontPage, isBlogTheme){
//     super(name, domain, author);
//     this.hasFrontPage = hasFrontPage;
//     this.isBlogTheme = isBlogTheme;
//   }
// }
//
// let childTheme1 = new ChildTheme("Learn With Naw Child", "learn-with-naw-child", "Nawras", "Yes", "Yes");
//
// console.log(childTheme1);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// /*
// let student = {
//   name: null,
//   studentClass: null
// };
//
// let foreignStudent = {
//   name: null,
//   studentClass: null,
//   scholarshipType: null
// };
// */
//
// class Student{
//
//   /* Constructor */
//   constructor(name, studentClass){
//     this.name = name;
//     this.studentClass = studentClass;
//   }
// }
//
// class ForeignStudent extends Student{
//
//   /* Constructor */
//   constructor(name, studentClass, scholarshipType){
//     super(name, studentClass);
//     this.scholarshipType = scholarshipType;
//   }
// }
//
// let student = new ForeignStudent("Lolo", "class B", "foreign exchange student");
// console.log(student);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// /*
// let item = {
//   name: null,
//   price: null,
// };
//
// let FreeItem = {
//   name: null,
//   price: 0,
// }
// */
//
// class Item{
//
//   /* Constructor */
//   constructor(n, p){
//     this.name = n;
//     this.price = p;
//   }
// }
//
// class FreeItem extends Item{
//
//   /* Constructor */
//   constructor(n){
//     super(n);
//     this.price = 0;
//   }
// }
//
//
// var i1 = new FreeItem("Ebook: how to do this?")
// console.log(i1.name);
// console.log(i1.price);
