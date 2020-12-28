// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 7- Events Part 1
// Last Update: 19-12-2020
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
// let el = document.getElementById("box-1");
//
// console.log(el);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let el = document.getElementById("box-1");
// el.style.backgroundColor = "Chocolate";
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// function changeBackground(el){
//   el.style.backgroundColor = "Chocolate";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// let el = document.getElementById("box-1");
// el.onmouseover = function(){
//   el.style.backgroundColor = "Chocolate";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// let el = document.getElementById("box-1");
// el.onmouseover = function(){
//   el.style.backgroundColor = "Chocolate";
// }
// el.onmouseout = function(){
//   el.style.backgroundColor = "DarkSlateGray";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let el = document.getElementById("box-2");
// el.onmouseover = function(){
//   el.style.border = "2rem solid black";
// }
// el.onmouseout = function(){
//   el.style.border = "0.5rem solid black";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// let el = document.getElementById("box-3");
// el.onmouseover = function(){
//   el.style.border = "0.5rem Gainsboro solid";
// }
// el.onmouseout = function(){
//   el.style.border = "1rem Gainsboro solid";
//   el.style.backgroundColor = "SpringGreen";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// let el = document.getElementById("box-3");
// el.onmouseover = function(){
//   el.style.border = "0.5rem Gainsboro solid";
//   el.style.backgroundColor = "tomato";
// }
// el.onmouseout = function(){
//   el.style.border = "1rem Gainsboro solid";
//   el.style.backgroundColor = "SpringGreen";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// let el = document.querySelector('#form input[type="submit"]');
// el.onmouseover = function(){
//   el.style.backgroundColor = "gray";
// }
// el.onmouseout = function(){
//   el.style.backgroundColor = "tomato";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// let el = document.querySelector('#answers h2');
// el.onmouseover = function(){
//   el.style.fontSize = "2rem";
// }
// el.onmouseout = function(){
//   el.style.fontSize = "1rem";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// let el = document.querySelector(`#form #yourName`);
//
// el.onchange = function(){
//   el.style.backgroundColor = "gray";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// let el = document.querySelector(`#form #age`);
//
// el.onchange = function(){
//   el.style.backgroundColor = "LemonChiffon";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// let el = document.querySelector(`#form #colorSelect`);
//
// el.onchange = function(){
//   let colorValue = el.value;
//   el.style.backgroundColor = colorValue;
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// let el = document.querySelector(`#form #colorSelect`);
//
// el.onchange = function(eventObject){
//   eventObject.preventDefault();
//   console.log(eventObject);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// let el = document.querySelector(`#form #colorSelect`);
//
// el.onchange = function(eventObject){
//   eventObject.preventDefault();
//   console.log(eventObject.type);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// let el = document.querySelector(`#form #colorSelect`);
//
// el.onchange = function(eventObject){
//   eventObject.preventDefault();
//   console.log(eventObject.target);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// let button = document.querySelector('#form input[type="submit"]');
// let form = document.querySelector('#form');
//
// button.onclick = function(e){
//   e.preventDefault();
//   form.style.backgroundColor = "gray";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// let button = document.querySelector('#form input[type="submit"]');
// let userName = document.querySelector('#form > #yourName');
// let nameParagraph = document.querySelector('#answers #yourName');
//
// button.onclick = function(e){
//   e.preventDefault();
//   let name = userName.value;
//   nameParagraph.appendChild(document.createTextNode(name));
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// let button = document.querySelector('#form input[type="submit"]');
//
// let userName = document.querySelector('#form > #yourName');
// let nameParagraph = document.querySelector('#answers #yourName');
//
// let userAge = document.querySelector('#form > #age');
// let ageParagraph = document.querySelector('#answers #yourAge');
//
// button.onclick = function(e){
//   e.preventDefault();
//   let name = userName.value;
//   nameParagraph.appendChild(document.createTextNode(name));
//   let age = userAge.value;
//   ageParagraph.appendChild(document.createTextNode(age));
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// let userName = document.querySelector('#form > #yourName');
// let nameParagraph = document.querySelector('#answers #yourName');
//
// let userAge = document.querySelector('#form > #age');
// let ageParagraph = document.querySelector('#answers #yourAge');
//
// let userColor = document.querySelector('#form > #colorSelect');
// let colorParagraph = document.querySelector('#answers #yourColor');
//
// button.onclick = function(e){
//   e.preventDefault();
//   let name = userName.value;
//   nameParagraph.appendChild(document.createTextNode(name));
//   let age = userAge.value;
//   ageParagraph.appendChild(document.createTextNode(age));
//   let color = userColor.value;
//   colorParagraph.appendChild(document.createTextNode(color));
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// let userName = document.querySelector('#form > #yourName');
// let nameParagraph = document.querySelector('#answers #yourName');
//
// let userAge = document.querySelector('#form > #age');
// let ageParagraph = document.querySelector('#answers #yourAge');
//
// let userColor = document.querySelector('#form > #colorSelect');
// let colorParagraph = document.querySelector('#answers #yourColor');
//
// button.onclick = function(e){
//   e.preventDefault();
//   let name = userName.value;
//   nameParagraph.textContent = "";
//   nameParagraph.appendChild(document.createTextNode(name));
//   let age = userAge.value;
//   ageParagraph.textContent = "";
//   ageParagraph.appendChild(document.createTextNode(age));
//   let color = userColor.value;
//   colorParagraph.textContent = "";
//   colorParagraph.appendChild(document.createTextNode(color));
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// let userName = document.querySelector('#form > #yourName');
// let nameParagraph = document.querySelector('#answers #yourName');
//
// let userAge = document.querySelector('#form > #age');
// let ageParagraph = document.querySelector('#answers #yourAge');
//
// let userColor = document.querySelector('#form > #colorSelect');
// let colorParagraph = document.querySelector('#answers #yourColor');
//
// let inputNotProvidedSentence = "No input for this field";
//
// button.onclick = function(e){
//   e.preventDefault();
//   let name = userName.value || inputNotProvidedSentence;
//   nameParagraph.textContent = "";
//   nameParagraph.appendChild(document.createTextNode(name));
//   let age = userAge.value || inputNotProvidedSentence;
//   ageParagraph.textContent = "";
//   ageParagraph.appendChild(document.createTextNode(age));
//   let color = userColor.value || inputNotProvidedSentence;
//   colorParagraph.textContent = "";
//   colorParagraph.appendChild(document.createTextNode(color));
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// button.onclick = function(e){
//   e.preventDefault();
//   console.log(e);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// button.onclick = function(e){
//   e.preventDefault();
//   console.log(e.target);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// button.onclick = function(e){
//   e.preventDefault();
//   console.log(e.altKey);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// button.onclick = function(e){
//   e.preventDefault();
//   console.log(e.path);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// button.onclick = function(e){
//   e.preventDefault();
//   console.log(e.clientX, e.clientY);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 28//
// /*###########*/
// console.log("####### Task 28 #######");
// let button = document.querySelector('#form input[type="submit"]');
//
// button.onclick = function(e){
//   e.preventDefault();
//   console.log(e.offsetX, e.offsetY);
// }
// console.log("..............................");
//
