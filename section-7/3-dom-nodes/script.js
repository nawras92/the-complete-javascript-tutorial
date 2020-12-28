// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 3- DOM Nodes Part 1
// Last Update: 06-12-2020
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
// let container = document.getElementById("container");
//
// console.log(container);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let firstSection = document.getElementsByTagName("section")[0];
//
// console.log(firstSection);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// let container = document.querySelector("#container");
//
// console.log(container);
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// let firstSection = document.querySelectorAll("section")[0];
//
// console.log(firstSection);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// let firstSection = document.querySelectorAll("section")[0];
//
// console.log(firstSection.nodeName);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let firstSection = document.querySelectorAll("section")[0];
//
// console.log(firstSection.nodeType);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// let boxes = document.getElementsByClassName("box");
//
// console.log(boxes);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// let container = document.getElementById("container");
// let fstChildEl = container.children[0];
//
// console.log(fstChildEl);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// let container = document.getElementById("container");
// let fstChildEl = container.firstElementChild;
//
// console.log(fstChildEl);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// let container = document.getElementById("container");
// let fstChildEl = container.firstElementChild;
//
// console.log(fstChildEl.nodeName);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// let container = document.getElementById("container");
// let fstChildEl = container.firstElementChild;
//
// console.log(fstChildEl.nodeType);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// let container = document.getElementById("container");
// let lstChildEl = container.children[2];
//
// console.log(lstChildEl);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// let container = document.getElementById("container");
// let lstChildEl = container.lastElementChild;
//
// console.log(lstChildEl);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// let container = document.getElementById("container");
// let lstChildEl = container.lastElementChild;
//
// console.log(lstChildEl.nodeName);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// let container = document.getElementById("container");
// let lstChildEl = container.lastElementChild;
//
// console.log(lstChildEl.nodeType);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// let container = document.getElementById("container");
// let secondChild = container.children[1];
//
// console.log(secondChild);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// let container = document.getElementById("container");
// let secondChild = container.children[1];
// let previousSibling = secondChild.previousElementSibling;
//
// console.log(previousSibling);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// let container = document.getElementById("container");
// let secondChild = container.children[1];
// let previousSibling = secondChild.previousElementSibling;
//
// console.log(previousSibling.nodeName);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// let container = document.getElementById("container");
// let secondChild = container.children[1];
// let previousSibling = secondChild.previousElementSibling;
//
// console.log(previousSibling.nodeType);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// let container = document.getElementById("container");
// let secondChild = container.children[1];
// let nextSibling = secondChild.nextElementSibling;
//
// console.log(nextSibling);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// let container = document.getElementById("container");
// let secondChild = container.children[1];
// let nextSibling = secondChild.nextElementSibling;
//
// console.log(nextSibling.nodeName);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// let container = document.getElementById("container");
// let secondChild = container.children[1];
// let nextSibling = secondChild.nextElementSibling;
//
// console.log(nextSibling.nodeType);
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// let box3 = document.getElementById("box-3");
//
// console.log(box3);
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// let box3 = document.getElementById("box-3");
// let hasClass = box3.hasAttribute("class");
//
// console.log(hasClass);
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// let box3 = document.getElementById("box-3");
// let hasId = box3.hasAttribute("id");
//
// console.log(hasId);
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
// let box3 = document.getElementById("box-3");
// let hasTitle = box3.hasAttribute("title");
//
// console.log(hasTitle);
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
// let box1 = document.querySelector("#container #box-1");
//
// console.log(box1);
// console.log("..............................");
//
// /*###########*/
//   //Task 28//
// /*###########*/
// console.log("####### Task 28 #######");
// let box1 = document.querySelector("#container #box-1");
// let hasClass = box1.hasAttribute("class");
//
// console.log(hasClass);
// console.log("..............................");
//
// /*###########*/
//   //Task 29//
// /*###########*/
// console.log("####### Task 29 #######");
// let box1 = document.querySelector("#container #box-1");
// let classValue = box1.getAttribute("class");
//
// console.log(classValue);
// console.log("..............................");
//
// /*###########*/
//   //Task 30//
// /*###########*/
// console.log("####### Task 30 #######");
// let box1 = document.querySelector("#container #box-1");
// let hasId = box1.hasAttribute("id");
//
// console.log(hasId);
// console.log("..............................");
//
// /*###########*/
//   //Task 31//
// /*###########*/
// console.log("####### Task 31 #######");
// let box1 = document.querySelector("#container #box-1");
// let idValue = box1.getAttribute("id");
//
// console.log(idValue);
// console.log("..............................");
//
// /*###########*/
//   //Task 32//
// /*###########*/
// console.log("####### Task 32 #######");
// let box1 = document.querySelector("#container #box-1");
// let hasAlt = box1.hasAttribute("alt");
//
// console.log(hasAlt);
// console.log("..............................");
//
// /*###########*/
//   //Task 33//
// /*###########*/
// console.log("####### Task 33 #######");
// let box1 = document.querySelector("#container #box-1");
// let altValue = box1.getAttribute("alt");
//
// console.log(altValue);
// console.log("..............................");
// /*###########*/
//   //Task 34//
// /*###########*/
// console.log("####### Task 34 #######");
// let h1 = document.querySelector("header > h1");
// let hasId = h1.hasAttribute("id");
//
// console.log(hasId);
// console.log("..............................");
//
// /*###########*/
//   //Task 35//
// /*###########*/
// console.log("####### Task 35 #######");
// let h1 = document.querySelector("header > h1");
// h1.setAttribute("id", "heading1");
//
// console.log(h1);
// console.log(h1.getAttribute("id"));
// console.log("..............................");
//
// /*###########*/
//   //Task 36//
// /*###########*/
// console.log("####### Task 36 #######");
// let box2 = document.querySelector("#container > #box-2");
// box2.setAttribute("class", "box black awesome");
//
// console.log(box2);
// console.log(box2.getAttribute("class"));
// console.log("..............................");
//
// /*###########*/
//   //Task 37//
// /*###########*/
// console.log("####### Task 37 #######");
// let box3 = document.querySelector("#container > #box-3");
// box3.removeAttribute("class");
//
// console.log(box3);
// console.log("..............................");
//
// /*###########*/
//   //Task 38//
// /*###########*/
// console.log("####### Task 38 #######");
// let container = document.querySelector("#container");
// container.removeAttribute("id");
//
// console.log(container.getAttribute("id"));
// console.log("..............................");
//
// /*###########*/
//   //Task 39//
// /*###########*/
// console.log("####### Task 39 #######");
// let boxes = document.querySelectorAll("#container > .box");
// for( let box of Array.from(boxes)){
//   box.removeAttribute("class");
// }
//
// console.log(boxes);
// console.log("..............................");
//
// /*###########*/
//   //Task 40//
// /*###########*/
// console.log("####### Task 40 #######");
// let boxes = document.querySelectorAll("#container > .box");
// for(let box of Array.from(boxes)){
//   box.removeAttribute("id");
// }
//
// console.log(boxes);
// console.log("..............................");
