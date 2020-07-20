//Task 1
var mark = 70;
if(mark > 60){
  var pass = true;
}else{
  var pass = false;
}
console.log(pass);
//true

//Task 2
var mark = 70;
var pass =  mark > 60 ? true : false;
console.log(pass);
//true

//Task 3
var value = 50;
if(value <= 30){
  console.log('low');
}else{
  console.log("high");
}
//high

var value = 50;
var result = value <=30 ? "low" : "high";
console.log(result);
//high

//Task 4
var name = "Ali";
var userEmail = "mail@gmail.com";
if(name){
    var username = name + 123;
}else{
    var username = userEmail;
}
console.log(username); //Ali123


var name = "";
var userEmail = "mail@gmail.com";
var username = name? name + 123 : userEmail;
console.log(username); //mail@gmail.com


//Task 5
var isStrong = true;
var message = isStrong ? "great" : "not secure!";
console.log(message);// great

//Task 6**
var temp = 20;
var weather = temp > 30 ? "Hot" : "Okay";
console.log(weather); //Okay

//Task 7
var wordsCount = 300;
var isLong = wordsCount > 500 ? true : false;
console.log(isLong); //false

//Task 8
var videoLength = 40;
var msg = videoLength >= 40 ? "Good" : "Not Bad";
console.log(msg); //Good
