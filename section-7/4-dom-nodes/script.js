// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 4- DOM Nodes Part 2
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
// let aTag  = document.querySelector(".header > .brand > h1 > a");
//
// console.log(aTag);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let aTag = document.querySelector(".header > .brand > h1 > a");
//
// console.log(aTag.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// let el = document.querySelector('.header > .brand > p');
// console.log(el.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// let el = document.querySelector(".header > .brand > h1 > a");
//
// el.textContent = "Modern Phones Store";
// console.log(el.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// let el = document.querySelector(".header > .brand > p");
//
// el.textContent = "Just another website";
// console.log(el.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let el = document.querySelector(".nav > .list").lastElementChild.querySelector("a");
//
// el.textContent = "Modern Phones";
//
// console.log(el.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// let el = document.querySelector(".main .items").children[2].querySelector(".item-details > .item-price");
//
// console.log(el.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// let el = document.querySelector(".main .items").lastElementChild.querySelector(".item-details > .item-title");
//
// console.log(el.textContent);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// let buttons = document.getElementsByClassName("btn");
//
// for (button of buttons){
//   button.textContent = "Order Now";
//   console.log(button.textContent);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var children = document.querySelector(".main > .items").children;
//
// for(child of children){
//   console.log(child);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var children = document.querySelector(".main > .items").childNodes;
//
// for(child of children){
//   console.log(child);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var el = document.querySelector(".main > .items").firstElementChild;
//
// console.log(el);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var el = document.querySelector(".main > .items").firstChild;
//
// console.log(el);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var el = document.querySelector(".main > .items").lastElementChild;
//
// console.log(el);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// var el = document.querySelector(".main > .items").lastChild;
//
// console.log(el);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// var el = document.querySelector(".main > .items").childNodes[3];
//
// console.log(el.nextElementSibling);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var el = document.querySelector(".main > .items").childNodes[3];
//
// console.log(el.nextSibling);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var el = document.querySelector(".main > .items").childNodes[5];
//
// console.log(el.previousElementSibling);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// var el = document.querySelector(".main > .items").childNodes[3];
//
// console.log(el.previousSibling);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// let el = document.querySelector(".main > .items").children[1];
//
// console.log(el);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// let el = document.querySelector(".main > .items").children[1];
//
// console.log(el.innerHTML);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// let el = document.querySelector(".nav > .list");
//
// console.log(el.innerHTML);
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// let el = document.querySelector(".nav > .search");
//
// console.log(el.innerHTML);
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// let el = document.querySelector(".nav > .search");
//
// el.innerHTML = "<p>search here for whatever you want</p>";
// console.log(el.innerHTML)
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// let el = document.querySelector(".nav > .search");
//
// el.textContent = "<p>search here for whatever you want</p>";
// console.log(el.innerHTML)
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
// var el = document.querySelector(".main > .items").lastElementChild;
//
// console.log(el.innerHTML);
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
// var el = document.querySelector(".main > .items").firstChild.nextSibling;
//
// console.log(el.innerHTML);
// console.log("..............................");
//
// /*###########*/
//   //Task 28//
// /*###########*/
// console.log("####### Task 28 #######");
// var el = document.querySelector(".main > .items").lastChild.previousSibling;
//
// el.innerHTML = "<p><strong>No more exists</strong></p>";
// console.log(el.innerHTML);
// console.log("..............................");
