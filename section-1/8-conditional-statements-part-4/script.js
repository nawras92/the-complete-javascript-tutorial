//Task 1
var mark = 92;
if(mark >= 90){
    var evaluation = "Excelent";
}else if(mark < 90 && mark >= 80 ){
    var evaluation = "Very good";
}else if(mark < 80 && mark >= 70){
    var evaluation = "Good";
}else{
    var evaluation = "Fail";
}
console.log(evaluation); //Excelent

//Task 2
var mark = 85;
if(mark >= 90){
    var evaluation = "Excelent";
}else if(mark < 90 && mark >= 80 ){
    var evaluation = "Very good";
}else if(mark < 80 && mark >= 70){
    var evaluation = "Good";
}else{
    var evaluation = "Fail";
}
console.log(evaluation); //Very good

//Task 3
var mark = 75;
if(mark >= 90){
    var evaluation = "Excelent";
}else if(mark < 90 && mark >= 80 ){
    var evaluation = "Very good";
}else if(mark < 80 && mark >= 70){
    var evaluation = "Good";
}else{
    var evaluation = "Fail";
}
console.log(evaluation); //Good

//Task 4
var mark = 60;
if(mark >= 90){
    var evaluation = "Excelent";
}else if(mark < 90 && mark >= 80 ){
    var evaluation = "Very good";
}else if(mark < 80 && mark >= 70){
    var evaluation = "Good";
}else{
    var evaluation = "Fail";
}
console.log(evaluation); //Fail

//Task 5
var temp = 30;
if(temp >= 40){
    var msg = "Very Hot";
}else if(temp < 40 && temp >= 30){
    var msg = "Hot";
}else if(temp < 30 && temp >= 25 ){
    var msg = "Okay";
}else if(temp < 25 && temp >= 15){
    var msg = "Cool";
}else{
    var msg = "Cold";
}
console.log(msg); //Hot


//Task 6
var value = 20;
if (value >= 10){
    if(value >=15){
        console.log("Pretty High")
    }else{
        console.log("Just High")
    }
}else{
    console.log("Low");
}
//Pretty High

//Task 7
var isLoggedIn = true;
var likedPost = false;
if(isLoggedIn){
  if(likedPost){
    console.log("Yes, he liked the post.");
  }else{
    console.log("He did NOT like the post.")
  }
}
//He did NOT like the post.
