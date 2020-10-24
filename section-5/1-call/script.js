// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 5
// Lesson: 1- Call Method
// Last Update: 6-10-2020
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
// function displayHello(){
//   console.log("Hello");
// }
//
// displayHello();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// function displayHello(){
//   console.log("Hello");
// }
//
// displayHello.call();
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// function greetUser(name){
//   console.log(`Hello ${name}`);
// }
//
// greetUser("Nawras");
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function greetUser(name){
//   console.log(`Hello ${name}`);
// }
//
// greetUser.call(this, "Nawras");
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function returnsThis(){
//   return this;
// }
//
// var val = returnsThis.call();
//
// console.log(val);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// function mul(a, b){
//   return a * b;
// }
//
// var res = mul.call(this, 20, 8);
// console.log(res);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// function add(num1, num2, num3, num4){
//   return num1 + num2 + num3 + num4;
// }
//
// var res = add.call(this, 5, 6, 0, 1);
// console.log(res);
// console.log(window.hasOwnProperty("webPage"));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// function validateValue(value){
//   return !!value;
// }
//
// var obj = {a:1, b:6}
//
// var res1 = validateValue.call(this, null);
// var res2 = validateValue.call(this, 1);
// var res3 = validateValue.call(this, undefined);
//
// console.log(res1, res2, res3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// function returnsThis(){
//   return this;
// }
//
// var val = returnsThis.call({});
//
// console.log(val);
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function returnsThis(){
//   return this;
// }
//
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// var val = returnsThis.call(obj);
//
// console.log(val);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// function returnsThis(){
//   return this;
// }
//
//
// var val = returnsThis.call(window);
//
// console.log(val);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// function add(num1, num2, num3, num4){
//   return num1 + num2 + num3 + num4;
// }
//
// var res = add.call(window, 5, 6, 0, 1);
// console.log(res);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function add(num1, num2, num3, num4){
//   return num1 + num2 + num3 + num4;
// }
//
// var obj = {
//   a: 1,
//   b: 2,
//   c: 2
// };
//
// var res = add.call(obj, 5, 6, 0, 1);
//
// console.log(res);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// var obj = {
//   returning: function(){
//     return this;
//   }
// }
//
// var result = obj.returning.call(window);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var obj = {
//   returning: function(){
//     return this;
//   }
// }
//
// var result = obj.returning.call(obj);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var obj = {
//   returning: function(){
//     return this;
//   }
// }
//
// var result = obj.returning.call({});
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var obj = {
//   returning: function(){
//     return this;
//   }
// }
//
// var obj2 = {
//   a: 1,
//   b: 2,
//   c: 3
// };
//
// var result = obj.returning.call(obj2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// var person1 = {
//   name: "Ola",
//   profession: "doctor",
//   hobby: "cooking",
//   bio: function(){
//     return `${this.name} is a ${this.profession} and she loves ${this.hobby}`;
//   }
// };
//
// person2 = {
//   name: "Ali",
//   profession: "joy creator",
//   hobby: "Creating new things"
// };
//
// var result = person1.bio.call(person2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
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
// var result = song1.description.call(song2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
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
// var result = lang1.stableReleaseVerbose.call(lang2);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// var epic1 = {
//   name: "Mahabharata",
//   author: "Vyasa",
//   language: "Sanskrit",
//   verses: 200000,
//   comment: function(){
//     return `${this.name} is a worth-reading epic. It is written in the ${this.language} language by ${this.author}.`
//   }
// };
//
// var epic2 = {
//   name: "Ramayana",
//   language: "Sanskrit"
// };
//
// var result = epic1.comment.call(epic2, epic2.author="Valmiki");
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// var obj1 = {
//   total: 80,
//   average: function(count){
//     return this.total/count;
//   }
// };
//
// var result = obj1.average.call({total:60}, 3);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// var obj1 = {
//   a: 1,
//   b: 2,
//   calc: function(randomNumber){
//     return this.a + this.b + randomNumber;
//   }
// };
//
// var result = obj1.calc.call({a: 5, b: 2}, 10);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// var user1 = {
//   name: "Sanad",
//   more: function(group){
//     return `${this.name} is from ${group}`
//   }
// };
//
// var user2 = {
//   name: "Jad"
// };
//
// var result = user1.more.call(user2, "group nine");
// console.log(result);
//
// console.log("..............................");

// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
//
// var galaxy1 = {
//   name: "Milky Way",
//   desc: "the galaxy containing the solar system, sun and earth",
//   info: function(user1, user2, user3){
//     return `${this.name} is ${this.desc}. Here is what people say about this galaxy: ${user1.comment}, ${user2.comment}, ${user3.comment}...etc.`
//   }
// }
//
// var galaxy2 = {
//   name: "Large Magellanic Cloud",
//   desc: "visible only from the southern hemisphere"
// }
//
// var user1 = {
//   name: "Jad",
//   comment: "It is amazing"
// };
//
// var user2 = {
//   name: "Sanad",
//   comment: "Wow!"
// };
//
// var user3 = {
//   name: "Ali",
//   comment: "I love stars!"
// };
//
//
// var result = galaxy1.info.call(galaxy2, user1, user2, user3);
// console.log(result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
//
// function Food(group){
//   this.group = group;
// }
//
// function Fruit(name, group){
//   Food.call(this, group)
//   this.name = name;
// }
//
// var apple = new Fruit("apple", "fruits");
// console.log(apple.name);
// console.log(apple.group);
//
// console.log("..............................");
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
//
// function Entity(name){
//   this.name = name;
// }
//
// function Organization(name, goal){
//   this.goal = goal;
//   Entity.call(this, name);
// }
//
// var org1 = new Organization("UN", "To achieve international cooperation");
//
// console.log(org1.name);
// console.log(org1.goal);
//
// console.log("..............................");
// /*###########*/
//   //Task 28//
// /*###########*/
// console.log("####### Task 28 #######");
//
// function Device(name, energyUsed){
//   this.name = name;
//   this.energyUsed = energyUsed;
// }
//
// function WashingMaching(name, energyUsed, automatic){
//   this.automatic = automatic;
//   Device.call(this, name, energyUsed);
// }
//
// var wM1= new WashingMaching("Washing Machine", "Electrical", true);
//
// console.log(wM1.name);
// console.log(wM1.energyUsed);
// console.log(wM1.automatic);
//
// console.log("..............................");
// /*###########*/
//   //Task 29//
// /*###########*/
// console.log("####### Task 29 #######");
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
//   Person.call(this, name, height, weight, eyesColor, country);
// }
//
// var programmer1 = new Programmer("Ali", "100cm", "30KG", "blue", "Jordan", "secretLanguage", 4);
//
// console.log(programmer1);
//
// console.log("..............................");
// /*###########*/
//   //Task 30//
// /*###########*/
// console.log("####### Task 30 #######");
// 
// function Thing(name, func){
//   this.name = name;
//   this.func = func;
// }
//
// function Laptop(name, func, processor, priceRange){
//   this.processor = processor;
//   this.priceRange = priceRange;
//   Thing.call(this, name, func);
// }
//
// var laptop1 = new Laptop("Laptop", "computation", "Intel i7", "500-1000USD");
//
// console.log(laptop1);
//
// console.log("..............................");
