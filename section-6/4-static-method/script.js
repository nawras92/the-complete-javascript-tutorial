// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 4 - Static methods and properties
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
// class User{
//
//   /* Static Properties & Methods */
//   static info = "This is the user class";
//
//   /*constructor*/
//   constructor(name, password){
//     this._name = name;
//     this._password = password;
//   }
// }
//
// console.log(User.info);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// class User{
//
//   /* Static Properties & Methods */
//   static info = "This is the user class";
//
//   /*constructor*/
//   constructor(name, password){
//     this._name = name;
//     this._password = password;
//   }
// }
//
// let user1 = new User("Nawras", "235");
//
// console.log(user1.info);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// class Student{
//
//   /* Static Properties & Methods */
//   static studentAverageDoc = "The student average is the sum of the marks over 4";
//
//   static passMark = 60;
//
//   /* Constructor */
//   constructor(id, name, mark1, mark2, mark3, mark4){
//     this.id = id;
//     this.name = name;
//     this.mark1 = mark1;
//     this.mark2 = mark2;
//     this.mark3 = mark3;
//     this.mark4 = mark4;
//   }
//
//   /* Methods */
//   studentAverage(){
//     return (this.mark1 + this.mark2 + this.mark3 + this.mark4) / 4;
//   }
//   passed(){
//     return this.studentAverage() >= 60 ? "has passed" : "has failed";
//   }
// }
//
// console.log(Student.studentAverageDoc);
// console.log(Student.passMark);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// class Student{
//
//   /* Static Properties & Methods */
//   static studentAverageDoc = "The student average is the sum of the marks over 4";
//
//   static passMark = 60;
//
//   /* Constructor */
//   constructor(id, name, mark1, mark2, mark3, mark4){
//     this.id = id;
//     this.name = name;
//     this.mark1 = mark1;
//     this.mark2 = mark2;
//     this.mark3 = mark3;
//     this.mark4 = mark4;
//   }
//
//   /* Methods */
//   studentAverage(){
//     return (this.mark1 + this.mark2 + this.mark3 + this.mark4) / 4;
//   }
//   passed(){
//     return this.studentAverage() >= 60 ? "has passed" : "has failed";
//   }
// }
//
// let student1 = new Student(56, "Ali Ali", 60, 50, 70, 90);
//
// console.log(student1.studentAverageDoc);
// console.log(student1.passMark);

// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// class Laptop{
//
//   /* Static Properties*/
//   static docs = "This is a laptop class to generate laptop objects";
//
//   /* Constructor */
//   constructor(proc, ram, ar, stg){
//     this.processor = proc;
//     this.ram = ram;
//     this.additionalRam = ar;
//     this.storage = stg;
//   }
// }
//
// console.log(Laptop.docs);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// class Epic{
//
//   /* Static Properties*/
//   static whatIs = "An epic is a long poem, typically one derived from ancient oral tradition, narrating the deeds and adventures of heroic or legendary figures or the past history of a nation.";
//
//   /*Constructor*/
//   constructor(name, author, lang){
//     this.name = name;
//     this.author = author;
//     this.language = lang;
//   }
// }
//
// console.log(Epic.whatIs);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// class Video{
//
//   /*Static Properties*/
//   static averageLength = "10min";
//
//   /*Constructor*/
//   constructor(title, len){
//     this.title = title;
//     this.length = len;
//   }
// }
//
// console.log(Video.averageLength);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// class Item{
//
//   /*Static Properties*/
//   static tax = "16%";
//
//   /*Constructor*/
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
// }
//
// console.log(Item.tax);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// class User{
//
//   /* Static Properties & Methods */
//   static info = "This is the user class";
//
//   static hasMorePoints(user1, user2){
//     return user1.points > user2.points;
//   }
//
//   /*constructor*/
//   constructor(name, points){
//     this.name = name;
//     this.points = points;
//   }
// }
//
// let u1 = new User("Ali", 566);
// let u2 = new User("Sami", 546)
// console.log(User.hasMorePoints(u1, u2));
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// class User{
//
//   /* Static Properties & Methods */
//   static info = "This is the user class";
//
//   static hasMorePoints(user1, user2){
//     return user1.points > user2.points;
//   }
//
//   /*constructor*/
//   constructor(name, points){
//     this.name = name;
//     this.points = points;
//   }
// }
//
// let u1 = new User("Ali", 566);
// let u2 = new User("Sami", 546)
// console.log(u1.hasMorePoints());
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// class Student{
//
//   /* Static Properties & Methods */
//   static studentAverageDoc = "The student average is the sum of the marks over 4";
//   static passMark = 60;
//
//   static allStudentsAverage(...values){
//     let sumOfStudentsAverage = 0;
//     for(let value of values){
//       sumOfStudentsAverage += value;
//     }
//     return sumOfStudentsAverage / values.length;
//   }
//
//   /* Constructor */
//   constructor(id, mark1, mark2, mark3, mark4){
//     this.id = id;
//     this.mark1 = mark1;
//     this.mark2 = mark2;
//     this.mark3 = mark3;
//     this.mark4 = mark4;
//   }
//
//   /* Methods */
//   studentAverage(){
//     return (this.mark1 + this.mark2 + this.mark3 + this.mark4) / 4;
//   }
//
//   /*Getters*/
//   get avg(){
//     return this.studentAverage();
//   }
//
// }
//
// let s1 = new Student(5, 70, 80, 90, 43);
// let s2 = new Student(71, 55, 30, 20, 75);
// let s3 = new Student(94, 12, 5, 20, 70);
//
// console.log(Student.allStudentsAverage(s1.avg, s2.avg, s3.avg));
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// class Student{
//
//   /* Static Properties & Methods */
//   static studentAverageDoc = "The student average is the sum of the marks over 4";
//   static passMark = 60;
//
//   static allStudentsAverage(...values){
//     let sumOfStudentsAverage = 0;
//     for(let value of values){
//       sumOfStudentsAverage += value;
//     }
//     return sumOfStudentsAverage / values.length;
//   }
//
//   /* Constructor */
//   constructor(id, mark1, mark2, mark3, mark4){
//     this.id = id;
//     this.mark1 = mark1;
//     this.mark2 = mark2;
//     this.mark3 = mark3;
//     this.mark4 = mark4;
//   }
//
//   /* Methods */
//   studentAverage(){
//     return (this.mark1 + this.mark2 + this.mark3 + this.mark4) / 4;
//   }
//
//   /*Getters*/
//   get avg(){
//     return this.studentAverage();
//   }
//
// }
//
// let s1 = new Student(5, 70, 80, 90, 43);
//
// console.log(s1.allStudentsAverage(50, 30));
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// /*
// function priceDifference(price1, price2){
//   return Math.abs(price1 - price2);
// }
// */
//
// class Laptop{
//
//   /* Static Properties & Methods */
//   static docs = "This is a laptop class to generate laptop objects";
//   static priceDifference(price1, price2){
//     return Math.abs(price1 - price2);
//   }
//
//   /* Constructor */
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
// }
//
// let l1 = new Laptop("Dell i5 core", 500);
// let l2 = new Laptop("Dell i7 core", 750);
//
// console.log(Laptop.priceDifference(l1.price, l2.price));
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// /*
// function compare(epic1, epic2, prop){
//   return `
// The result of the comparison between epic1 and epic2 in terms of ${prop} is as follows:
// ###
// The ${prop} of epic 1 is: ${epic1[prop]}.
// ..........................
// The ${prop} of epic 2 is: ${epic2[prop]}.
// ###
// The comparison is completed successfully.`
// }
// */
//
// class Epic{
//
//   /* Static Methods*/
//   static compare(epic1, epic2, prop){
//     return `
//   The result of the comparison between epic1 and epic2 in terms of ${prop} is as follows:
//   ###
//   The ${prop} of epic 1 is: ${epic1[prop]}.
//   ..........................
//   The ${prop} of epic 2 is: ${epic2[prop]}.
//   ###
//   The comparison is completed successfully.`
//   }
//
//   /*Constructor*/
//   constructor(name, author, lang){
//     this.name = name;
//     this.author = author;
//     this.language = lang;
//   }
// }
//
//
// let epic1 = new Epic("Mahabharata", "Vyasa", "Sanskrit");
// let epic2 = new Epic("Ramayana", "Valmiki", "Sanskrit");
//
// console.log(Epic.compare(epic1, epic2, "author"));
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// /*
// function appliedTax(price){
//   return price >= 800 ? "16%" : "8%";
// }
// */
// class Item{
//
//   /*Static Methods*/
//   static appliedTax(price){
//     return price >= 800 ? "16%" : "8%";
//   }
//
//   /*Constructor*/
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
// }
//
// let item1 = new Item("iPhone", 1000);
// let item2 = new Item("green hat", 23);
//
// console.log(Item.appliedTax(item1.price));
// console.log(Item.appliedTax(item2.price));
// console.log("..............................");
//
