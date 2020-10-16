// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 15- Prototypes Part 4
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
// /*
// var book = {
//   weight: null,
//   pages: null
// };
// */
//
// function Book(w, p){
//   this.weight = w;
//   this.pages = p;
// }
//
// var book1 = new Book(0.5, 500);
// var book2 = new Book(0.2, 200);
// var book3 = new Book(0.7, 1000);
//
// console.log(book1);
// console.log(book2);
// console.log(book3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var book = {
//   weight: null,
//   pages: null
// };
//
// var book1 = Object.create(book);
//
// console.log(book1);
// console.log(book1.weight);
// console.log(book1.pages);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var book = {
//   weight: null,
//   pages: null
// };
//
// var book1 = Object.create(book);
// book1.title = "The Four Agreements: A Practical Guide to Personal Freedom";
//
// console.log(book1.title);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var book = {
//   weight: null,
//   pages: null
// };
//
// var book1 = Object.create(book);
// book1.title = "The Four Agreements: A Practical Guide to Personal Freedom";
//
// console.log(`title is book property: ${book.hasOwnProperty("title")}`);
// console.log(`title is book1 property: ${book1.hasOwnProperty("title")}`);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// /*
// var book1 = {weight:0.5, pages:500};
// var book2 = {weight:0.2, pages:200};
// var book3 = {weight:0.7, pages:1000};
// */
//
// var book = {
//   weight: null,
//   pages: null
// };
//
// var book1 = Object.create(book);
// book1.weight = 0.5;
// book1.pages = 500;
//
// var book2 = Object.create(book);
// book2.weight = 0.2;
// book2.pages = 200;
//
// var book3 = Object.create(book);
// book3.weight = 0.7;
// book3.pages = 1000;
//
// console.log(book1);
// console.log(book2);
// console.log(book3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var book = {
//   weight: null,
//   pages: null
// };
//
// var book1 = Object.create(book);
// book1.weight = 0.5;
// book1.pages = 500;
//
// console.log(Object.getPrototypeOf(book1));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var book = {
//   weight: null,
//   pages: null
// };
//
//
// var book2 = Object.create(book);
// book2.weight = 0.2;
// book2.pages = 200;
//
//
// console.log(Object.getPrototypeOf(book2));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var book = {
//   weight: null,
//   pages: null
// };
//
// var book3 = Object.create(book);
// book3.weight = 0.2;
// book3.pages = 200;
//
// console.log(Object.getPrototypeOf(book3));
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var obj1 = {
//   value: 5
// };
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var obj2 = {
//   value: 10
// };
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var obj = {
//   prop1: {
//     value: 5
//   },
//   prop2:{
//     value:10
//   }
// };
//
// console.log(obj);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var obj = {
//   prop1: {
//     value: 5
//   },
//   prop2:{
//     value:10
//   }
// };
//
// var myObj = Object.create({}, obj);
//
// console.log(myObj);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
/*
Object properties:
os: "Android"
ram: "8GB"
storage: "512GB"
*/
//
// var phone = Object.create({}, {
//   os: {
//     value: "Android"
//   },
//   ram: {
//     value: "8GB"
//   },
//   storage: {
//     value: "512GB"
//   }
//   });
//
// console.log(phone);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// /*
// Object Properties:
// firstName: "Ali"
// lastName: "Zaki"
// username: "AliZaki88"
// email: "alizaki@mail.com"
// */
//
// var user = Object.create({},{
//   firstname: {
//     value: "Ali"
//   },
//   lastName: {
//     value: "Zaki"
//   },
//   username: {
//     value: "AliZaki88"
//   },
//   email: {
//     value: "alizaki@mail.com"
//   }
//   });
//
// console.log(user);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// /*
// Object Properties:
// title: "Orobroy"
// artist: "Dorantes"
// album: "PASSO A DUE"
// */
//
// var song = Object.create({}, {
//   title: {
//     value: "Orobroy"
//   },
//   artist: {
//     value: "Dorantes"
//   },
//   album: {
//     value: "PASSO A DUE"
//   }
//   });
//
// console.log(song);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// /*
// Object Properties:
// name: "Mahabharata"
// author: "Vyasa"
// language: "Sanskrit"
// verses: 200000
// summary: "It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pāṇḍava princes and their successors."
// }
// */
//
// var epic = Object.create({}, {
//   name: {
//     value: "Mahabharata"
//   },
//   author: {
//     value: "Vyasa"
//   },
//   language: {
//     value: "Sanskrit"
//   },
//   verses:{
//     value: 200000
//   },
//   summary:{
//     value: "It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pāṇḍava princes and their successors."
//   }
//   });
//
// console.log(epic);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// /*
// Object Properties:
// name: "Python"
// filenameExtension: ".py"
// stableRelease: "3.8.5"
// */
//
// var lang = Object.create({}, {
//   name:{
//     value: "Python"
//   },
//   filenameExtension: {
//     value: ".py"
//   },
//   stableRelease: {
//     value: "3.8.5"
//   }
//   });
//
// console.log(lang);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var book = {
//   weight: null,
//   pages: null
// };
//
// var newBook = Object.create(book, {
//   weight:{
//     value: 0.2
//   },
//   author: {
//     value: "Nawras Ali"
//   }
//   });
//
// console.log(newBook);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var food = {
//   group: null
// };
//
// var myFood = Object.create(food, {
//   group:{
//     value: "vegetables"
//   },
//   name: {
//     value: "Leafy green"
//   }
//   });
//
// console.log(myFood);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// var song = {
//   genre: null,
//   origin: null,
//   title: null
// };
//
// var mySong = Object.create(song, {
//   genre:{
//     value: "Jazz"
//   },
//   artist: {
//     value: "Miles Davis"
//   }
//   });
//
// console.log(mySong);
//
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// var obj = {
//   item1: 1,
//   item2: 2,
//   item3: 3
// }
//
// console.log(Object.getPrototypeOf(obj));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// function User(fstName, lstName){
//   this.firstName = fstName;
//   this.lastName = lstName;
// }
//
// var user1 = new User("Nawras", "Ali");
//
// console.log(Object.getPrototypeOf(user1));
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// var obj = new Array();
//
// console.log(Object.getPrototypeOf(obj));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// console.log(Object.getPrototypeOf(user));
//
// console.log("..............................");

//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
//
// var func = new Function()
//
// console.log(Object.getPrototypeOf(func));
//
// console.log("..............................");
