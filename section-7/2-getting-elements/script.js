// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 2- DOM Navigation
// Last Update: 02-12-2020
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
// let container = document.getElementById("boxes-container");
// console.log(container);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let box1 = document.getElementById("box-1");
// console.log(box1);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// let box2 = document.getElementById("box-2");
// console.log(box2);
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// let box4 = document.getElementById("box-4");
// box4.style.backgroundColor = "DarkViolet";
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// let box6 = document.getElementById("box-6");
// box6.style.backgroundColor = "Olive";
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let box5 = document.getElementById("box-5");
// let box5Parent = box5.parentElement;
// console.log(box5Parent);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// let box2 = document.getElementById("box-2");
// let box2Parent = box2.parentElement;
// console.log(box2Parent);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// let boxes = document.getElementsByClassName("box");
// let boxesArray = Array.from(boxes);
//
// console.log(boxesArray);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// let boxes = document.getElementsByClassName("box");
// let boxesArray = Array.from(boxes);
//
// for( let let box of boxesArray){
//   console.log(box);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// let container = document.getElementById("boxes-container");
// let containerChildren = container.children;
//
// console.log(containerChildren);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// let container = document.getElementById("boxes-container");
// let containerChildren = container.children;
// let containerChildrenArray = Array.from(containerChildren);
//
// for(let el of containerChildrenArray){
//   console.log(el);
// }
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// let divS = document.getElementsByTagName("div");
//
// console.log(divS);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// let divS = document.getElementsByTagName("div");
// let divSArray = Array.from(divS);
//
// for(let el of divSArray){
//   console.log(el);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// let sections = document.getElementsByTagName("section");
//
// console.log(sections);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// let sections = document.getElementsByTagName("section");
//
// let sectionsArray = Array.from(sections);
// let firstSection = sectionsArray[0];
//
// console.log(firstSection);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// let sections = document.getElementsByTagName("section");
// let firstSection = Array.from(sections)[0];
//
// console.log(firstSection);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// let sections = document.getElementsByTagName("section");
// let firstSection = Array.from(sections)[0];
// let firstSectionChildren = firstSection.children;
//
// console.log(firstSectionChildren);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// let sections = document.getElementsByTagName("section");
// let firstSectionChildren = Array.from(sections)[0].children;
//
// for(let el of firstSectionChildren){
//   console.log(el);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// let box1 = document.querySelector("#boxes-container > #box-1");
//
// console.log(box1);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// let box3 = document.querySelector("#boxes-container > #box-3");
//
// console.log(box3);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// let box5 = document.querySelector("#boxes-container > #box-5");
//
// console.log(box5);
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// let box8 = document.querySelector("#boxes-container > #box-8");
//
// console.log(box8);
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// let h1 = document.querySelector("header > h1");
//
// console.log(h1);
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// let p = document.querySelector("header > p");
//
// console.log(p);
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
// let p = document.getElementsByTagName("header")[0].getElementsByTagName("p")[0];
//
// console.log(p);
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
// let divS = document.querySelectorAll("#boxes-container > div");
//
// console.log(divS);
// console.log("..............................");
//
// /*###########*/
//   //Task 28//
// /*###########*/
// console.log("####### Task 28 #######");
// let boxes = document.querySelectorAll("#boxes-container > .box");
//
// console.log(boxes);
// console.log("..............................");
//
// /*###########*/
//   //Task 29//
// /*###########*/
// console.log("####### Task 29 #######");
// let h1List = document.querySelectorAll("header h1");
//
// console.log(h1List);
// console.log("..............................");
//
// /*###########*/
//   //Task 30//
// /*###########*/
// console.log("####### Task 30 #######");
// let pList = document.querySelectorAll("header p");
//
// console.log(pList);
// console.log("..............................");
