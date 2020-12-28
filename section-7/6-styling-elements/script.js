// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 6- Styling Elements
// Last Update: 11-12-2020
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
// let el = document.querySelector("#container > .box:first-child");
//
// el.style.backgroundColor = "green";
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let els = document.querySelectorAll("#container > .box:nth-child(even)");
//
// for(let el of els){
//   el.style.backgroundColor = "red";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// let el = document.querySelector("#container > .box:nth-child(3)");
//
// el.style.width = "30rem";
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// let el = document.querySelector("#container > .box:nth-child(4)");
//
// el.style.height = "20rem";
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// let els = document.querySelectorAll("#container > .box");
//
// for(let el of els){
//   el.style.border = "0.2rem solid #000";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let el = document.querySelector("#container > .box:nth-child(5)");
// let text = document.createTextNode("I am in box 5");
// el.appendChild(text);
//
// el.style.color = "#fff";
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// let el = document.querySelector("#container > .box:nth-child(5)");
// let text = document.createTextNode("I am in box 5");
// el.appendChild(text);
//
// el.style.color = "#fff";
// el.style.fontSize = "2rem";
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// let el = document.querySelector("#container > .box:nth-child(5)");
// let text = document.createTextNode("I am in box 5");
// el.appendChild(text);
//
// el.style.color = "#fff";
// el.style.fontSize = "2rem";
// el.style.padding = "4rem";
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// let els = document.querySelectorAll("#container > .box");
//
// for(let el of els){
//   el.style.margin = "0.1rem 0.2rem";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// let els = document.querySelectorAll("#container > .box");
//
// for(let el of els){
//   el.style.cssText = "border: 2rem dotted red; background-color: olive; margin-left: 0.1rem";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// let el = document.querySelector("header");
//
// el.style.cssText = "background-color: tomato; color: white;";
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// let el = document.querySelector("header");
//
// el.style.cssText = "background-color: tomato; color: white; padding: 2rem";
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// let el = document.querySelector("header");
//
// el.style.cssText = "background-color: tomato; color: white; padding: 2rem; margin: 2rem 0";
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// let el = document.querySelector("header");
//
// el.style.cssText = "background-color: tomato; color: white; padding: 2rem; margin: 2rem 0; text-align: center";
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// let el = document.getElementsByClassName("box")[0];
//
// console.log(el.className);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// let el = document.getElementsByClassName("box")[0];
//
// el.className = "border-bold";
// console.log(el.className);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// let el = document.getElementsByClassName("box")[0];
//
// el.className += " border-bold";
// console.log(el.className);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// let el = document.getElementsByClassName("box")[1];
//
// el.className += " border-light";
// console.log(el.className);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// let el = document.getElementsByClassName("box")[5];
//
// console.log(el.classList);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// let el = document.getElementsByClassName("box")[5];
// el.classList.add("hide");
// console.log(el.classList);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// let el = document.getElementsByClassName("box")[5];
// el.classList.add("hide");
// el.classList.remove("hide");
// console.log(el.classList);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// let el = document.querySelector("#container > .box:first-child");
//
// el.classList.add("border-bold");
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// let el = document.querySelector("#container > .box:nth-child(3)");
//
// el.classList.add("border-light");
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// let el = document.querySelector("#container > .box:nth-child(4)");
//
// el.classList.remove("box");
// el.classList.add("border-light");
// console.log("..............................");
//
