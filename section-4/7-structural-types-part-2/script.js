/*
Course: The complete JavaScript Tutorial
Course Link: https://js.learnwithnaw.com/
GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
Section: 4
Lesson: 7- Structural Types Part 2
Last Update: 11-09-2020
Author: Nawras Ali
Author YouTube Channel: https://youtube.com/c/learnwithnaw
*/

//Note: Run each task separately

/*###########*/
  //Task 1//
/*###########*/
console.log("####### Task 1 #######");

var dateNow = new Date();

console.log(`The date: ${dateNow}`);

console.log("..............................");

/*###########*/
  //Task 2//
/*###########*/
console.log("####### Task 2 #######");

var dateNow = new Date();

console.log(`The constructor is: ${dateNow.constructor}`);

console.log("..............................");

/*###########*/
  //Task 3//
/*###########*/
console.log("####### Task 3 #######");

var dateNow = new Date();

console.log(`dateNow.valueOf(): ${dateNow.valueOf()}`);

console.log("..............................");

/*###########*/
  //Task 4//
/*###########*/
console.log("####### Task 4 #######");

console.log(`The time now is: ${Date.now()}`);

console.log("..............................");

/*###########*/
  //Task 5//
/*###########*/
console.log("####### Task 5 #######");

var dateNow = new Date();

console.log(`dateNow.getTime(): ${dateNow.getTime()}`);

console.log("..............................");

/*###########*/
  //Task 6//
/*###########*/
console.log("####### Task 6 #######");

console.log(new Date().valueOf(), Date.now(), new Date().getTime())


console.log("..............................");

/*###########*/
  //Task 7//
/*###########*/
console.log("####### Task 7 #######");

var dateNow = new Date();
var dayOfMonth = dateNow.getDate();

console.log(`The full date is: ${dateNow}`);
console.log(`The day number is: ${dayOfMonth}`);

console.log("..............................");

/*###########*/
  //Task 8//
/*###########*/
console.log("####### Task 8 #######");

var dateNow = new Date();
var dayOfWeek = dateNow.getDay();

console.log(`The full date is: ${dateNow}`);
console.log(`The day number is: ${dayOfWeek}`);
console.log("..............................");

/*###########*/
  //Task 9//
/*###########*/
console.log("####### Task 9 #######");

var dateNow = new Date();
var fullYear = dateNow.getFullYear();

console.log(`The full date is: ${dateNow}`);
console.log(`The 4-digit year is: ${fullYear}`);

console.log("..............................");

/*###########*/
  //Task 10//
/*###########*/
console.log("####### Task 10 #######");

var dateNow = new Date();
var year = dateNow.getYear();

console.log(`The full date is: ${dateNow}`);
console.log(`The 2-3-digit year is: ${year}`);

console.log("..............................");

/*###########*/
  //Task 11//
/*###########*/
console.log("####### Task 11 #######");

var date = new Date();

console.log(`The current day of the month: ${date.getDate()}`);
console.log(`The current day of the week: ${date.getDay()}`);
console.log(`The current year: ${date.getFullYear()}`);

console.log("..............................");

/*###########*/
  //Task 12//
/*###########*/
console.log("####### Task 12 #######");

var hours = new Date().getHours();

console.log(`The current hour: ${hours}`);

console.log("..............................");

/*###########*/
  //Task 13//
/*###########*/
console.log("####### Task 13 #######");

var minutes = new Date().getMinutes();

console.log(`The current minute: ${minutes}`);

console.log("..............................");

/*###########*/
  //Task 14//
/*###########*/
console.log("####### Task 14 #######");

var seconds = new Date().getSeconds();

console.log(`The current second: ${seconds}`);

console.log("..............................");

/*###########*/
  //Task 15//
/*###########*/
console.log("####### Task 15 #######");

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(`The date: ${date}`);
console.log(`The current hour: ${hours}`);
console.log(`The current minute: ${minutes}`);
console.log(`The current second: ${seconds}`);

console.log("..............................");

/*###########*/
  //Task 16//
/*###########*/
console.log("####### Task 16 #######");

var date = new Date();
date.setDate(5);

console.log(date.getDate());

console.log("..............................");

/*###########*/
  //Task 17//
/*###########*/
console.log("####### Task 17 #######");

var date = new Date();
date.setDate(5);
date.setMonth(10);

console.log(date.getMonth());

console.log("..............................");

/*###########*/
  //Task 18//
/*###########*/
console.log("####### Task 18 #######");

var date = new Date();
date.setDate(5);
date.setMonth(10);
date.setFullYear(1998);

console.log(date.getFullYear());

console.log("..............................");

/*###########*/
  //Task 19//
/*###########*/
console.log("####### Task 19 #######");

var date = new Date();
date.setDate(5);
date.setMonth(10);
date.setFullYear(1998);
date.setHours(22);

console.log(date.getHours());

console.log("..............................");

/*###########*/
  //Task 20//
/*###########*/
console.log("####### Task 20 #######");

var date = new Date();
date.setDate(5);
date.setMonth(10);
date.setFullYear(1998);
date.setHours(22);
date.setMinutes(50);

console.log(date.getMinutes());

console.log("..............................");

/*###########*/
  //Task 21//
/*###########*/
console.log("####### Task 21 #######");

var date = new Date();
date.setDate(5);
date.setMonth(10);
date.setFullYear(1998);
date.setHours(22);
date.setMinutes(50);
date.setSeconds(11);

console.log(date.getSeconds());
console.log(date);

console.log("..............................");

/*###########*/
  //Task 22//
/*###########*/
console.log("####### Task 22 #######");

var date = new Date();

date.setDate(12);
date.setMonth(5);
date.setYear(80);
date.setHours(14);
date.setMinutes(17);
date.setSeconds(2);

console.log(date);

console.log("..............................");

/*###########*/
  //Task 23//
/*###########*/
console.log("####### Task 23 #######");

var date = new Date();

date.setDate(12);
date.setMonth(5);
date.setYear(80);
date.setHours(14);
date.setMinutes(17);
date.setSeconds(2);

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log("..............................");

/*###########*/
  //Task 24//
/*###########*/
console.log("####### Task 24 #######");

var date = new Date();

date.setDate(01);
date.setMonth(11);
date.setYear(2758);
date.setHours(01);
date.setMinutes(11);
date.setSeconds(00);

console.log(date);

console.log("..............................");

/*###########*/
  //Task 25//
/*###########*/
console.log("####### Task 25 #######");

var date = new Date();

date.setDate(01);
date.setMonth(11);
date.setYear(2758);
date.setHours(01);
date.setMinutes(11);
date.setSeconds(00);


console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log("..............................");
