// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 5
// Lesson: 2- Apply Method
// Last Update: 12-10-2020
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
// function returnOne(){
//   return 1;
// }
//
// var result = returnOne.call();
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// function returnOne(){
//   return 1;
// }
//
// var result = returnOne.apply();
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// function calc(num){
//   return num / 2;
// };
//
// var result = calc.call(this, 100);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function calc(num){
//   return num / 2;
// };
//
// var result = calc.apply(this, 100);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function calc(num){
//   return num / 2;
// };
//
// var result = calc.apply(this, [100]);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// function calc(num1, num2, num3){
//   return (num1 + num2) / num3;
// }
//
// var result = calc.call(this, 4, 6, 2);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// function calc(num1, num2, num3){
//   return (num1 + num2) / num3;
// }
//
// var result = calc.apply(this, [4, 6, 2]);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var obj = {
//   firstWord: "Mama",
//   secondWord: "Papa",
//   allWords: function(){
//     return `${this.firstWord}, ${this.secondWord}...etc.`
//   }
// };
//
// var result = obj.allWords.apply(obj);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// function Entity(name){
//   this.name = name;
// }
//
// function Organization(name, goal){
//   this.goal = goal;
//   Entity.apply(this, [name]);
// }
//
// var org1 = new Organization("UN", "To achieve international cooperation");
//
// console.log(org1.name);
// console.log(org1.goal);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function Person(name, height, weight, eyesColor, country){
//   this.name = name;
//   this.height = height;
//   this.weight = weight;
//   this.eyesColor = eyesColor;
//   this.country = country;
// }
//
// function Programmer(name, height, weight, eyesColor, country, languagesUsed, yearsOfExperience){
//   this.languagesUsed = languagesUsed;
//   this.yearsOfExperience = yearsOfExperience;
//   Person.apply(this, [name, height, weight, eyesColor, country]);
// }
//
// var programmer1 = new Programmer("Ali", "100cm", "30KG", "blue", "Jordan", "secretLanguage", 4);
//
// console.log(programmer1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var song1 = {
//   title: "Orobroy",
//   artist: "Dorantes",
//   album: "PASSO A DUE",
//   description: function(){
//     return `A beautiful song by ${this.artist} from his ${this.album} album.`;
//   }
// };
//
// var song2 = {
//   album: "Purple Rain",
//   artist: "Prince"
// };
//
// var result = song1.description.apply(song2);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var lang1 = {
//   name: "Python",
//   stableRelease: "3.8.3",
//   stableReleaseVerbose:  function(){
//     return `The stable release of ${this.name} is ${this.stableRelease}.`;
//   }
// };
//
// var lang2 = {
//   name: "PHP",
//   stableRelease: "7.4.10"
// };
//
// var result = lang1.stableReleaseVerbose.apply(lang2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// var obj1 = {
//   total: 80,
//   average: function(count){
//     return this.total/count;
//   }
// };
//
// var result = obj1.average.apply({total:60}, [3]);
// console.log(result);
// console.log("..............................");
//
