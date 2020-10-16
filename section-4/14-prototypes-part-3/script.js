// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 14- Prototypes Part 3
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
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// User.prototype.fullName = function(){
//   return (this.firstName + " " + this.lastName);
// }
// console.log(User.prototype);
//
// console.log(".................")
//
// delete User.prototype.fullName;
// console.log(User.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
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
// console.log(Epic.prototype);
// console.log(".............................")
// delete Epic.prototype.languageVerbose;
// console.log(Epic.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// function Video(title, lang){
//   this.title = title;
//   this.language = lang;
// }
//
// Video.prototype.category = "Education";
// console.log(Video.prototype);
// console.log(".....................")
// delete Video.prototype.category;
// console.log(Video.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function MarkerPen(color, price){
//   this.color = color;
//   this.price = price;
// }
//
// MarkerPen.prototype.brand = "Claro";
// console.log(MarkerPen.prototype);
// console.log(".....................")
// delete MarkerPen.prototype.brand;
// console.log(MarkerPen.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function Section(title, desc){
//     this.title = title;
//     this.description = desc;
// }
//
// Section.prototype.course = "JavaScript Course";
// console.log(Section.prototype);
// console.log(".....................")
// delete Section.prototype.course;
// console.log(Section.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// /*
// var lesson = {
//   title: null,
//   difficultyLevel: null
// };
// */
//
// function Lesson(title, diffLev){
//   this.title = title;
//   this.difficultyLevel = diffLev;
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// function Lesson(title, diffLev){
//   this.title = title;
//   this.difficultyLevel = diffLev;
// }
//
// Lesson.prototype.section = "Section 1";
// console.log(Lesson.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// function Lesson(title, diffLev){
//   this.title = title;
//   this.difficultyLevel = diffLev;
// }
//
// Lesson.prototype.section = "Section 1";
// Lesson.prototype.about = function(){
//   return `The difficulty level of ${this.title} is ${this.difficultyLevel} and it comes under ${this.section} discussion.`;
// }
//
// var lesson1 = new Lesson("Array Helpers", "Normal");
// var lesson2 = new Lesson("Objects", "Easy");
//
// console.log(lesson1.about());
// console.log(lesson2.about());
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// function Lesson(title, diffLev){
//   this.title = title;
//   this.difficultyLevel = diffLev;
// }
//
// Lesson.prototype.section = "Section 1";
// Lesson.prototype.about = function(){
//   return `The difficulty level of ${this.title} is ${this.difficultyLevel} and it comes under ${this.section} discussion.`;
// }
//
// for (var prop in Lesson.prototype){
//   console.log(`${prop}:${Lesson.prototype[prop]}`);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// function Lesson(title, diffLev){
//   this.title = title;
//   this.difficultyLevel = diffLev;
// }
//
// Lesson.prototype.section = "Section 1";
// Lesson.prototype.about = function(){
//   return `The difficulty level of ${this.title} is ${this.difficultyLevel} and it comes under ${this.section} discussion.`;
// }
//
// for (var prop in Lesson.prototype){
//   console.log(`${prop}:${Lesson.prototype[prop]}`);
// }
// console.log("......................");
// delete Lesson.prototype.about;
// for (var prop in Lesson.prototype){
//   console.log(`${prop}:${Lesson.prototype[prop]}`);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// /*
// var quote = {
//   author: null,
//   source: null,
//   theWord: null
// };
// */
//
// function Quote(author, src, word){
//   this.author = author;
//   this.source = src;
//   this.theWord = word;
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// function Quote(author, src, word){
//   this.author = author;
//   this.source = src;
//   this.theWord = word;
// }
//
// Quote.prototype.date = Date.now();
//
// console.log(Quote.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function Quote(author, src, word){
//   this.author = author;
//   this.source = src;
//   this.theWord = word;
// }
//
// Quote.prototype.date = Date.now();
// Quote.prototype.mentions = ["book1", "book2", "book3"];
//
// console.log(Quote.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// function Quote(author, src, word){
//   this.author = author;
//   this.source = src;
//   this.theWord = word;
// }
//
// Quote.prototype.date = Date.now();
// Quote.prototype.mentions = ["book1", "book2", "book3"];
// Quote.prototype.category = "religious";
//
// console.log(Quote.prototype);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// function Quote(author, src, word){
//   this.author = author;
//   this.source = src;
//   this.theWord = word;
// }
//
// Quote.prototype.date = Date.now();
// Quote.prototype.mentions = ["book1", "book2", "book3"];
// Quote.prototype.category = "religious";
//
// for (var prop in Quote.prototype){
//   console.log(`${prop}:${Quote.prototype[prop]}`);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// function Quote(author, src, word){
//   this.author = author;
//   this.source = src;
//   this.theWord = word;
// }
//
// Quote.prototype.date = Date.now();
// Quote.prototype.mentions = ["book1", "book2", "book3"];
// Quote.prototype.category = "religious";
//
// for (var prop in Quote.prototype){
//   console.log(`${prop}:${Quote.prototype[prop]}`);
// }
// console.log(".......");
//
// delete Quote.prototype.category;
// for (var prop in Quote.prototype){
//   console.log(`${prop}:${Quote.prototype[prop]}`);
// }
//
// console.log("..............................");
