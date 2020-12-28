// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 5- Creating Elements
// Last Update: 10-12-2020
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
// let div = document.createElement("div");
//
// console.log(div);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// console.log(div);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// let body = document.querySelector("body");
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
//
// body.appendChild(div);
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
// body.appendChild(div);
//
// let p = document.createElement("p");
//
// console.log(p);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
// body.appendChild(div);
//
// let p = document.createElement("p");
//
// let text = document.createTextNode("This is box one");
//
// console.log(text);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
// body.appendChild(div);
//
// let p = document.createElement("p");
//
// let text = document.createTextNode("This is box one");
//
// console.log(text.nodeName);
// console.log(text.nodeType);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
// body.appendChild(div);
//
// let p = document.createElement("p");
//
// let text = document.createTextNode("This is box one");
// p.appendChild(text);
//
// console.log(p);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
// body.appendChild(div);
//
// let p = document.createElement("p");
//
// let text = document.createTextNode("This is box one");
// p.appendChild(text);
//
// div.appendChild(p);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// let div = document.createElement("div");
// div.setAttribute("id", "box1");
//
// let body = document.querySelector("body");
// let script = document.querySelector("script");
// body.insertBefore(div, script);
//
// let p = document.createElement("p");
//
// let text = document.createTextNode("This is box one");
// p.appendChild(text);
//
// div.appendChild(p);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");
//
// // Adding Elements to the DOM tree
// body.insertBefore(boxes, script);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");
// let box1 = document.createElement("div");
// box1.setAttribute("class", "box");
// box1.setAttribute("id", "box1");
//
// // Adding Elements to the DOM tree
// body.insertBefore(boxes, script);
// boxes.appendChild(box1);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");
// let box1 = document.createElement("div");
// box1.setAttribute("class", "box");
// box1.setAttribute("id", "box1");
// let box1P = document.createElement("p");
//
// // Adding Elements to the DOM tree
// body.insertBefore(boxes, script);
// boxes.appendChild(box1);
// box1.appendChild(box1P);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");
// let box1 = document.createElement("div");
// box1.setAttribute("class", "box");
// box1.setAttribute("id", "box1");
// let box1P = document.createElement("p");
// let text1 = document.createTextNode("This is box one");
//
// // Adding Elements to the DOM tree
// body.insertBefore(boxes, script);
// boxes.appendChild(box1);
// box1.appendChild(box1P);
// box1P.appendChild(text1);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");
// //box1
// let box1 = document.createElement("div");
// box1.setAttribute("class", "box");
// box1.setAttribute("id", "box1");
// let box1P = document.createElement("p");
// let text1 = document.createTextNode("This is box one");
// //box2
// let box2 = document.createElement("div");
// box2.setAttribute("class", "box");
// box2.setAttribute("id", "box2");
// let box2P = document.createElement("p");
// let text2 = document.createTextNode("This is box two");
//
// // Adding Elements to the DOM tree
// body.insertBefore(boxes, script);
// //box1
// boxes.appendChild(box1);
// box1.appendChild(box1P);
// box1P.appendChild(text1);
// //box2
// boxes.appendChild(box2);
// box2.appendChild(box2P);
// box2P.appendChild(text2);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");
// //box1
// let box1 = document.createElement("div");
// box1.setAttribute("class", "box");
// box1.setAttribute("id", "box1");
// let box1P = document.createElement("p");
// let text1 = document.createTextNode("This is box one");
// //box2
// let box2 = document.createElement("div");
// box2.setAttribute("class", "box");
// box2.setAttribute("id", "box2");
// let box2P = document.createElement("p");
// let text2 = document.createTextNode("This is box two");
// //box3
// let box3 = document.createElement("div");
// box3.setAttribute("class", "box");
// box3.setAttribute("id", "box3");
// let box3P = document.createElement("p");
// let text3 = document.createTextNode("This is box three");
//
// // Adding Elements to the DOM tree
// body.insertBefore(boxes, script);
// //box1
// boxes.appendChild(box1);
// box1.appendChild(box1P);
// box1P.appendChild(text1);
// //box2
// boxes.appendChild(box2);
// box2.appendChild(box2P);
// box2P.appendChild(text2);
// //box3
// boxes.appendChild(box3);
// box3.appendChild(box3P);
// box3P.appendChild(text3);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let section = document.createElement("section");
//
// // Adding Elements to the DOM tree
// body.insertBefore(section, script);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let section = document.createElement("section");
// let article1 = document.createElement("article");
// let article2 = document.createElement("article");
//
// // Adding Elements to the DOM tree
// body.insertBefore(section, script);
// section.appendChild(article1);
// section.appendChild(article2);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let section = document.createElement("section");
// let article1 = document.createElement("article");
// let article2 = document.createElement("article");
// let article1Heading = document.createElement("h2");
// article1Heading.setAttribute("class", "heading");
// let article2Heading = document.createElement("h2");
// article2Heading.setAttribute("class", "heading");
//
//
// // Adding Elements to the DOM tree
// body.insertBefore(section, script);
// section.appendChild(article1);
// section.appendChild(article2);
// article1.appendChild(article1Heading);
// article2.appendChild(article2Heading);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let section = document.createElement("section");
// let article1 = document.createElement("article");
// let article2 = document.createElement("article");
// let article1Heading = document.createElement("h2");
// article1Heading.setAttribute("class", "heading");
// let article2Heading = document.createElement("h2");
// article2Heading.setAttribute("class", "heading");
// let headingText1 = document.createTextNode("this is the article 1 heading");
// let headingText2 = document.createTextNode("this is the article 2 heading");
//
// // Adding Elements to the DOM tree
// body.insertBefore(section, script);
// section.appendChild(article1);
// section.appendChild(article2);
// article1.appendChild(article1Heading);
// article2.appendChild(article2Heading);
// article1Heading.appendChild(headingText1);
// article2Heading.appendChild(headingText2);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let section = document.createElement("section");
// let article1 = document.createElement("article");
// let article2 = document.createElement("article");
// let article1Heading = document.createElement("h2");
// article1Heading.setAttribute("class", "heading");
// let article2Heading = document.createElement("h2");
// article2Heading.setAttribute("class", "heading");
// let headingText1 = document.createTextNode("this is the article 1 heading");
// let headingText2 = document.createTextNode("this is the article 2 heading");
// let article1P = document.createElement("p");
// article1P.setAttribute("class", "description");
// let article2P = document.createElement("p");
// article2P.setAttribute("class", "description");
//
// // Adding Elements to the DOM tree
// body.insertBefore(section, script);
// section.appendChild(article1);
// section.appendChild(article2);
// article1.appendChild(article1Heading);
// article2.appendChild(article2Heading);
// article1Heading.appendChild(headingText1);
// article2Heading.appendChild(headingText2);
// article1.appendChild(article1P);
// article2.appendChild(article2P);
//
// console.log(body);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// // Selecting Elements
// let body = document.querySelector("body");
// let script = document.querySelector("script");
//
// // Creating Elements
// let section = document.createElement("section");
// let article1 = document.createElement("article");
// let article2 = document.createElement("article");
// let article1Heading = document.createElement("h2");
// article1Heading.setAttribute("class", "heading");
// let article2Heading = document.createElement("h2");
// article2Heading.setAttribute("class", "heading");
// let headingText1 = document.createTextNode("this is the article 1 heading");
// let headingText2 = document.createTextNode("this is the article 2 heading");
// let article1P = document.createElement("p");
// article1P.setAttribute("class", "description");
// let article2P = document.createElement("p");
// article2P.setAttribute("class", "description");
// let description1 = document.createTextNode("this is the article 1 description");
// let description2 = document.createTextNode("this is the article 2 description");
//
// // Adding Elements to the DOM tree
// body.insertBefore(section, script);
// section.appendChild(article1);
// section.appendChild(article2);
// article1.appendChild(article1Heading);
// article2.appendChild(article2Heading);
// article1Heading.appendChild(headingText1);
// article2Heading.appendChild(headingText2);
// article1.appendChild(article1P);
// article2.appendChild(article2P);
// article1P.appendChild(description1);
// article2P.appendChild(description2);
//
// console.log(body);
// console.log("..............................");
//
