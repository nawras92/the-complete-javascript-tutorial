// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 10- Extra Practice
// Last Update: 1-10-2020
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
// var obj = {
//   originalValue: 5,
//   double: function(){
//     return this.originalValue * 2;
//   },
//   thrice: function(){
//     return this.originalValue * 3;
//   }
// }
//
// console.log(obj.double());
// console.log(obj.thrice());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
/*
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
// */
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com",
//   fullName: function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
//
// console.log(user.fullName());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
/*
var person = {
  name: "Ola",
  profession: "Doctor",
  hobby: "Cooking"
}
*/
// var person = {
//   name: "Ola",
//   profession: "doctor",
//   hobby: "cooking",
//   bio: function(){
//     return `${this.name} is a ${this.profession} and she loves ${this.hobby}`;
//   }
// }
//
// console.log(person.bio());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
/*
var song = {
  title: "Orobroy",
  artist: "Dorantes",
  album: "PASSO A DUE"
}
*/
//
// var song = {
//   title: "Orobroy",
//   artist: "Dorantes",
//   album: "PASSO A DUE",
//   description: function(){
//     return `A beautiful song by ${this.artist} from his ${this.album} album.`;
//   }
// }
//
// console.log(song.description());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
/*
var epic = {
  name: "Mahabharata",
  author: "Vyasa",
  language: "Sanskrit",
  verses: 200000,
  summary: "It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pāṇḍava princes and their successors."
}
*/
//
// var epic = {
//   name: "Mahabharata",
//   author: "Vyasa",
//   language: "Sanskrit",
//   verses: 200000,
//   summary: "It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pāṇḍava princes and their successors.",
//   comment: function(){
//     return `${this.name} is a worth-reading epic. It is written in the ${this.language} language by ${this.author}. It has ${this.verses} verses. ${this.summary}`;
//   }
// }
//
// console.log(epic.comment());
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
//   name: "Python",
//   designer: "Guido van Rossum",
//   developer: "Python Software Foundation",
//   license: "Python Software Foundation License",
//   os: " Linux, macOS, and Windows",
//   filenameExtension: ".py",
//   paradigm: "Multi-paradigm: functional, imperative, object-oriented, structured, reflective",
//   stableRelease: "3.8.5"
// }
// */
//
// var programmingLanguage = {
//   name: "Python",
//   designer: "Guido van Rossum",
//   developer: "Python Software Foundation",
//   license: "Python Software Foundation License",
//   os: " Linux, macOS, and Windows",
//   filenameExtension: ".py",
//   paradigm: "Multi-paradigm: functional, imperative, object-oriented, structured, reflective",
//   stableRelease: "3.8.5",
//   stableReleaseVerbose: function(){
//     return `The stable release of ${this.name} is ${this.stableRelease}.`;
//   }
// }
//
// console.log(programmingLanguage.stableReleaseVerbose())
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var programmingLanguage = {
//   name: "Python",
//   designer: "Guido van Rossum",
//   developer: "Python Software Foundation",
//   license: "Python Software Foundation License",
//   os: " Linux, macOS, and Windows",
//   filenameExtension: ".py",
//   paradigm: "Multi-paradigm: functional, imperative, object-oriented, structured, reflective",
//   stableRelease: "3.8.5",
//   stableReleaseVerbose: function(){
//     return `The stable release of ${this.name} is ${this.stableRelease}.`;
//   },
//   supportedPlatforms: function(){
//     return `${this.os} systems support ${this.name}.`
//   }
// }
//
// console.log(programmingLanguage.supportedPlatforms());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var obj = {
//   originalValue: 5,
//   double: () => this.originalValue * 2,
//   thrice: () => this.originalValue * 3
// }
//
// console.log(obj.double());
// console.log(obj.thrice());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var obj = {
//   originalValue: 5,
//   double: () => this,
//   thrice: () => this.originalValue * 3
// }
//
// console.log(obj.double());
// console.log(obj.thrice());
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function Song(title, artist, album){
//     this.title = title;
//     this.artist = artist;
//     this.album = album
// }
//
// var song1 = new Song("Orobroy", "Dorantes", "PASSO A DUE");
//
// console.log(song1);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// function Song(title, artist, album){
//     this.title = title;
//     this.artist = artist;
//     this.album = album
// }
//
// var song1 = new Song("Orobroy", "Dorantes", "PASSO A DUE");
//
// console.log(`The type of song1: ${typeof song1}`);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// function Song(title, artist, album){
//     this.title = title;
//     this.artist = artist;
//     this.album = album
// }
//
// var song1 = new Song("Orobroy", "Dorantes", "PASSO A DUE");
//
// console.log(`The constructor of song1: ${song1.constructor}`);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function Song(title, artist, album){
//     this.title = title;
//     this.artist = artist;
//     this.album = album
// }
//
// var song1 = new Song("Orobroy", "Dorantes", "PASSO A DUE");
//
// console.log(`song1 is an instance of Object: ${song1 instanceof Object}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// function Song(title, artist, album){
//     this.title = title;
//     this.artist = artist;
//     this.album = album
// }
//
// var song1 = new Song("Orobroy", "Dorantes", "PASSO A DUE");
//
// console.log(`song1 is an instance of Song: ${song1 instanceof Song}`);
//
// console.log("..............................");
