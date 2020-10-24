// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 5
// Lesson: 4- Arguments
// Last Update: 14-10-2020
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
// function displayArguments(a){
//   return a;
// }
//
// console.log(displayArguments(4));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// function displayArguments(a, b, c, d){
//   return (a, b, c, d);
// }
//
// console.log(displayArguments(4, 5, 7, 10));
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// function displayArguments(a, b, c, d){
//   return [a, b, c, d];
// }
//
// var a, b, c, d;
// [a, b, c, d] = displayArguments(4, 5, 7, 10);
// console.log(a, b, c, d);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// function calc(n1, n2){
//   return [n1 + n2, n1 - n2, n1 * n2, n1 / n2];
// }
//
// var res1, res2, res3, res4;
// [res1, res2, res3, res4] = calc(5, 8);
// console.log(res1, res2, res3, res4);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// function calc(num1, num2, num3){
//   return [num1 * num2, num1 * num3, num2 * num3];
// }
//
// var res1, res2, res3;
// [res1, res2, res3] = calc(8, 0, 3);
// console.log(res1, res2, res3);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// function calc(a1, a2, a3, a4, a5, a6, a7, a8){
//   return [a1, a2, a3, a4, a5, a6, a7, a8];
// }
//
// var res1, res2, res3, res4, res5, res6, res7, res8;
// [res1, res2, res3, res4, res5, res6, res7, res8] = calc(10, 20, 30, 40, 50, 60, 70, 80);
// console.log(res1, res2, res3, res4, res5, res6, res7, res8);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// function calc(a1, a2, a3, a4, a5, a6, a7, a8){
//   return [a1, a2, a3, a4, a5, a6, a7, a8];
// }
//
// var res1, res2, res3;
// [res1, res2, res3] = calc(10, 20, 30, 40, 50, 60, 70, 80);
// console.log(res1, res2, res3);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// function calc(a1, a2, a3, a4, a5, a6, a7, a8){
//   return [a1, a2, a3, a4, a5, a6, a7, a8];
// }
//
// var res1, res2, res3;
// [res1, res2, ...res3] = calc(10, 20, 30, 40, 50, 60, 70, 80);
// console.log(res1, res2, res3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// function calc(a, b, c, d, e, f, g, h){
//   return [a * 1 , b * 2, c * 3, d * 4, e * 5, f * 6, g * 7, h * 8];
// }
//
// var n1, n2;
// [n1, ...n2] = calc(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(n1, n2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// function calc(a, b, c, d, e, f, g, h){
//   return [a * 1 , b * 2, c * 3, d * 4, e * 5, f * 6, g * 7, h * 8];
// }
//
// var n1, n2, n3, n4;
// [n1, n2, n3, ...n4] = calc(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(n1, n2, n3, n4);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
//
// var {a, b, c} = obj;
// console.log(a, b, c);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// function doSomething(task1, task2, task3){
//   return {t1: task1, t2: task1, t3: task3};
// }
//
// var {t1, t2, t3} = doSomething("Meditate", "Be grateful", "Study JS");
// console.log(t1, t2, t3);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
//
// function getMeALaptop(p, r, s){
//   return {processor: p, ram: r, storage: s}
// }
//
// var {ram} = getMeALaptop("i7", "8GB", "2TB");
// console.log(ram);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// function getMeAVideo(l, g, c, t, l){
//   return {
//     length: l,
//     host: g,
//     category: c,
//     title: t,
//     language: l
//   }
// }
//
// var {title, language} = getMeAVideo("30min", "Nawras", "Education", "JS rest operator", "Arabic");
// console.log(title, language);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// function userInfo(f, l, u, e){
//   return {
//     firstName: f,
//     lastName: l,
//     username: u,
//     email: e
//   }
// };
//
// var {firstName, lastName, email} = userInfo("Ola", "Rasi", "OlaRasi89", "olaRasi@gmail.com" );
// console.log(firstName, lastName, email);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// function getMeALaptop(p, r, s){
//   return {processor: p, ram: r, storage: s}
// }
//
// var processor, rest;
// var {processor, ...rest} = getMeALaptop("i7", "8GB", "2TB");
// console.log(processor, rest);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// function getMeAVideo(l, g, c, t, l){
//   return {
//     length: l,
//     host: g,
//     category: c,
//     title: t,
//     language: l
//   }
// }
//
// var host, other;
// var {host, ...other} = getMeAVideo("30min", "Nawras", "Education", "JS rest operator", "Arabic");
// console.log(host, other);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// function userInfo(f, l, u, e){
//   return {
//     firstName: f,
//     lastName: l,
//     username: u,
//     email: e
//   }
// };
//
// var username, email, other;
// var {username, email, ...other} = userInfo("Ola", "Rasi", "OlaRasi89", "olaRasi@gmail.com" );
// console.log(username, email, other);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
//
// function displayArguments(a, b, c, d){
//   return arguments;
// }
//
// var result = displayArguments(4, 5, 7, 10);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
//
// function displayArguments(a, b, c, d){
//   return arguments;
// }
//
// var result = displayArguments(4, 5, 7, 10);
// console.log(typeof result);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
//
// function displayArguments(a, b, c, d){
//   return arguments;
// }
//
// var result = displayArguments(4, 5, 7, 10);
// console.log(result[0], result[1], result[2], result[3]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
//
// function calc(a1, a2, a3, a4, a5, a6, a7, a8){
//   return arguments;
// }
//
// var result = calc(10, 20, 30, 40, 50, 60, 70, 80);
// console.log(result[0], result[1], result[2], result[3], result[4], result[5], result[6], result[7]);
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
//
// function giveMeMore(...values){
//   return values;
// }
//
// var result = giveMeMore(6, 8, 7, 10, 11);
// console.log(result);
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
//
// function func(arg1, arg2, arg3, arg4, arg5){
//   arguments[0] = 105;
//   return arguments[0]
// }
//
// var result = func(5, 8, 50, 0, 55);
// console.log(result);
// console.log("..............................");

// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
//
// function func(...values){
//   arguments[8] = arguments[8] * 20;
//   return arguments[8]
// }
//
// var result = func(10, 80, 55, 97, 4, 88, 70, 100, 200, 10);
// console.log(result);
//
// console.log("..............................");
//
