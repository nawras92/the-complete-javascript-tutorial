//Task 1
for(var i=1;i<=3;i++){
    console.log(i);
}
/*
1
2
3
*/

// results separator
console.log("...........................");

//Task 2
var i = 1;
while(i<=3){
    console.log(i);
    i++;
}
/*
1
2
3
*/

// results separator
console.log("...........................");

//Task 3
var temp = 25;
while(temp > 0){
    console.log("The temperature is " + temp + ". I can handle it!");
    temp=temp-2;
}
/*
The temperature is 25. I can handle it!
The temperature is 23. I can handle it!
The temperature is 21. I can handle it!
The temperature is 19. I can handle it!
The temperature is 17. I can handle it!
The temperature is 15. I can handle it!
The temperature is 13. I can handle it!
The temperature is 11. I can handle it!
The temperature is 9. I can handle it!
The temperature is 7. I can handle it!
The temperature is 5. I can handle it!
The temperature is 3. I can handle it!
The temperature is 1. I can handle it!
*/

// using for loop
// var temp = 25;
// for(temp; temp > 0; temp--){
//     console.log("The temperature is " + temp + ". I can handle it!");
// }

// results separator
console.log("...........................");

//Task 4
var isLoggedIn = false;
while(isLoggedIn){
    console.log("He can comment");
}
//

// results separator
console.log("...........................");

//Task 5
var isLoggedIn = true;
while(isLoggedIn){
    console.log("He can comment");
    break;
}
//He can comment

// results separator
console.log("...........................");

//Task 6
for(var num = 1; num<=6; num++){
    if((num + 5) > 7){
        break;
    }
    console.log(num+2);
}
/*
3
4
*/

// results separator
console.log("...........................");

//Task 7
var count = 5;
while(count){
    console.log("Count: " + count);
    count--;
}
/*
Count: 5
Count: 4
Count: 3
Count: 2
Count: 1
*/

// results separator
console.log("...........................");

//Task 8
var password = "123";
while(!password){
    console.log("Please provide us with your password");
}
//

// results separator
console.log("...........................");
