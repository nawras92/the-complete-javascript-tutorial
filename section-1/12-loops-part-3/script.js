//Task 1
for(var num=0; num<=10; num++){
  console.log(num*num);
}
/*
0
1
4
9
16
25
36
49
64
81
100
*/

// results separator
console.log("...........................");

//Task 2
for(var num=0; num<=10; num++){
  if(num === 5){
    console.log(5 * 2);
  }else{
    console.log(num*num);
  }
}
/*
0
1
4
9
16
10
36
49
64
81
100
*/

// results separator
console.log("...........................");

// Task 3
for(var num=0; num<=10; num++){
  if(num === 5){

  }else{
    console.log(num*num);
  }
}
/*
0
1
4
9
16
36
49
64
81
100
*/

// results separator
console.log("...........................");

//Task 4
// This is a single line comment. This line won't be executed. Yaay!

// results separator
console.log("...........................");

//Task 5
/*
This is a multi-line comment
This won't be executed.
I can write anything I want
I can add whatever I like here
But I will be moderate in writing comments
I will add them as notes to myself and other programmers
to clarify what I did a certain task in a certain way.
*/

// results separator
console.log("...........................");

// Task 6
for(var num=0; num<=10; num++){
  if(num === 5){
      continue;
  }else{
    console.log(num*num);
  }
}
/*
0
1
4
9
16
36
49
64
81
100
*/

// results separator
console.log("...........................");

//Task 7
for(var num=-50; num<=50; num=num+10){
  if(num === 0){
      continue;
  }else{
    console.log(num / 10);
  }
}
/*
-5
-4
-3
-2
-1
1
2
3
4
5
*/

// results separator
console.log("...........................");

//Task 8
var counter = 0;
while (counter < 5) {
   counter++;
   if (counter === 3) {
      continue;
   }
   console.log(counter);
}
/*
1
2
4
5
*/

// results separator
console.log("...........................");

//Task 9
for(var num=-4;num<=4; num++){
  if(num === -4 || num === 4){
    continue;
  }
  var add2 = num + 2;
  if(add2 >= 4){
    break;
  }
  console.log(add2);
}
/*
-1
0
1
2
3
*/
