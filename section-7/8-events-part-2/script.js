// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 7
// Lesson: 8- Events Part 2
// Last Update: 20-12-2020
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
// el.onclick = function(e){
//   e.preventDefault();
//   el.style.border = "0.3rem #000 dotted";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// let el = document.getElementById("box-1");
//
// el.onclick = function(e){
//   e.preventDefault();
//   console.log(e.target);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// let el = document.getElementById("box-1");
//
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.border = "0.3rem #000 dotted";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// let el = document.getElementById("box-1");
//
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.border = "0.3rem #000 dotted";
//   console.log(this);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// let el = document.getElementById("box-3");
//
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.backgroundColor = "#000";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// let el = document.getElementById("box-4");
//
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.backgroundColor = "Gainsboro";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// let el = document.getElementById("box-4");
//
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.backgroundColor = "Gainsboro";
//   this.style.border = "0.4rem LemonChiffon double";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// let el = document.getElementById("box-3");
//
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.backgroundColor = "SpringGreen";
// }
// el.onclick = function(e){
//   e.preventDefault();
//   this.style.border = "1rem CadetBlue dotted";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// el.addEventListener("click", addText);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// function changeColor(){
//   this.style.color = "red";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
// function changeColor(){
//   this.style.color = "red";
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// el.addEventListener("click", addText);
// el.addEventListener("click",  changeColor);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// function changeFontSize(){
//   this.style.fontSize = "1.5rem";
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
// function changeColor(){
//   this.style.color = "red";
// }
// function changeFontSize(){
//   this.style.fontSize = "1.5rem";
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// el.addEventListener("click", addText);
// el.addEventListener("click", changeColor);
// el.addEventListener("click", changeFontSize);
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
// function changeColor(){
//   this.style.color = "red";
// }
// function changeFontSize(){
//   this.style.fontSize = "1.5rem";
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// el.addEventListener("click", addText);
// el.addEventListener("click", changeColor);
// el.addEventListener("click", changeFontSize);
//
// el.removeEventListener('click', changeColor);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
// function changeColor(){
//   this.style.color = "red";
// }
// function changeFontSize(){
//   this.style.fontSize = "1.5rem";
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// el.addEventListener("click", addText);
// el.addEventListener("click", changeColor);
// el.addEventListener("click", changeFontSize);
//
// el.removeEventListener('click', changeColor);
// el.removeEventListener('click', addBorder);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// let el = document.getElementById("box-3");
//
// function changeBgColor(){
//   this.style.backgroundColor = "SpringGreen";
// }
// function addBorder(){
//   this.style.border = "1rem CadetBlue dotted";
// }
// function addText(){
//   this.appendChild(document.createTextNode("this is a text"));
// }
// function changeColor(){
//   this.style.color = "red";
// }
// function changeFontSize(){
//   this.style.fontSize = "1.5rem";
// }
//
// el.addEventListener("click", changeBgColor);
// el.addEventListener("click", addBorder);
// el.addEventListener("click", addText);
// el.addEventListener("click", changeColor);
// el.addEventListener("click", changeFontSize);
//
// el.removeEventListener('click', changeColor);
// el.removeEventListener('click', addBorder);
// el.removeEventListener('click', changeFontSize);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
//
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked);
//
// function box2Clicked(){
//     console.log("Box 2 is clicked");
// }
// let box2 = document.getElementById("box-2");
// box2.addEventListener('click', box2Clicked);
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked);
//
// function box2Clicked(){
//     console.log("Box 2 is clicked");
// }
// let box2 = document.getElementById("box-2");
// box2.addEventListener('click', box2Clicked);
//
// function box3Clicked(){
//     console.log("Box 3 is clicked");
// }
// let box3 = document.getElementById("box-3");
// box3.addEventListener('click', box3Clicked);
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked);
//
// function box2Clicked(){
//     console.log("Box 2 is clicked");
// }
// let box2 = document.getElementById("box-2");
// box2.addEventListener('click', box2Clicked);
//
// function box3Clicked(){
//     console.log("Box 3 is clicked");
// }
// let box3 = document.getElementById("box-3");
// box3.addEventListener('click', box3Clicked);
//
// function box4Clicked(){
//     console.log("Box 4 is clicked");
// }
// let box4 = document.getElementById("box-4");
// box4.addEventListener('click', box4Clicked);
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked, true);
//
// function box2Clicked(){
//     console.log("Box 2 is clicked");
// }
// let box2 = document.getElementById("box-2");
// box2.addEventListener('click', box2Clicked, true);
// console.log("..............................");
//
// /*###########*/
//   //Task 26//
// /*###########*/
// console.log("####### Task 26 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked, true);
//
// function box2Clicked(){
//     console.log("Box 2 is clicked");
// }
// let box2 = document.getElementById("box-2");
// box2.addEventListener('click', box2Clicked, true);
//
// function box3Clicked(){
//     console.log("Box 3 is clicked");
// }
// let box3 = document.getElementById("box-3");
// box3.addEventListener('click', box3Clicked, true);
// console.log("..............................");
//
// /*###########*/
//   //Task 27//
// /*###########*/
// console.log("####### Task 27 #######");
// function box1Clicked(){
//     console.log("Box 1 is clicked");
// }
// let box1 = document.getElementById("box-1");
// box1.addEventListener('click', box1Clicked, true);
//
// function box2Clicked(){
//     console.log("Box 2 is clicked");
// }
// let box2 = document.getElementById("box-2");
// box2.addEventListener('click', box2Clicked, true);
//
// function box3Clicked(){
//     console.log("Box 3 is clicked");
// }
// let box3 = document.getElementById("box-3");
// box3.addEventListener('click', box3Clicked, true);
//
// function box4Clicked(){
//     console.log("Box 4 is clicked");
// }
// let box4 = document.getElementById("box-4");
// box4.addEventListener('click', box4Clicked, true);
// console.log("..............................");
//
