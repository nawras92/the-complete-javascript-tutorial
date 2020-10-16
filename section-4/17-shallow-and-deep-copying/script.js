// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 17- Extra Practice 2
// Last Update: 4-10-2020
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
// var myFood = {
//   group: "vegetables",
//   name: "Leafy green"
// }
//
// console.log(Object.entries(myFood));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// var myFood = {
//   group: "vegetables",
//   name: "Leafy green"
// }
//
// console.log(Object.keys(myFood));
// console.log(Object.values(myFood));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
//
// var user = {
//   firstName: "Ali",
//   lastName: "Zaki",
//   username: "AliZaki88",
//   email: "alizaki@mail.com"
// }
//
// console.log(Object.entries(user));
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
//
// var book = {
//   weight: 0.5,
//   pages: 500
// };
//
// console.log(Object.keys(book));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// var video = {
//   length: "30min",
//   host: "Nawras Ali",
//   category: "Education",
//   title: "Create a WordPress Theme",
//   language: "Arabic"
// };
//
// console.log(Object.values(video));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// var phone = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// console.log(Object.entries(phone));
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
//
// var obj1 = {
//   a: 1,
//   b: 2
// };
//
// var obj2 = obj1;
//
// console.log(obj1, obj2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// var obj1 = {
//   a: 1,
//   b: 2
// };
//
// var obj2 = obj1;
// obj2.c = 3;
//
// console.log(obj1, obj2);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// var arr1 = [1, 2, 3];
//
// var arr2 = arr1;
//
// console.log(arr1, arr2);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// var arr1 = [1, 2, 3];
//
// var arr2 = arr1;
// arr1.push(4);
//
// console.log(arr1, arr2);
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
//
// var arr1 = [1, 2, 3];
//
// var arr2 = [...arr1];
//
// console.log(arr1, arr2);
// }
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// var arr1 = [1, 2, 3];
//
// var arr2 = [...arr1];
// arr1.push(4);
//
// console.log(arr1, arr2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// var obj1 = {
//   a: 1,
//   b: 2
// };
//
// var obj2 = {...obj1};
//
// console.log(obj1, obj2);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// var obj1 = {
//   a: 1,
//   b: 2
// };
//
// var obj2 = {...obj1};
// obj2.c = 3;
//
// console.log(obj1, obj2);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// var obj1 = {
//   a: 1,
//   b: 2
// };
//
// var obj2 = {};
//
// Object.assign(obj2, obj1);
// console.log(obj1, obj2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// var obj1 = {
//   a: 1,
//   b: 2
// };
//
// var obj2 = {};
// Object.assign(obj2, obj1);
// obj1.c = 3;
//
// console.log(obj1, obj2);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// var obj = {
//   firstName: "Ali",
//   lastName: "Zaki"
// };
//
// var copy = Object.assign({}, obj);
// console.log(copy);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var obj = {
//   firstName: "Ali",
//   lastName: "Zaki"
// };
//
// var copy = Object.assign({}, obj);
// copy.groupId = 5;
//
// console.log(obj, copy);
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var obj = {
//   os: "Andriod",
//   ram: "8GB",
//   storage: "512GB"
// };
//
// var copy = Object.assign({}, obj);
//
// console.log(obj, copy);
// console.log("..............................");
//
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };
//
// var obj2 = {
//   d: 4,
//   e: 5
// };
//
//
// Object.assign(obj1, obj2);
//
// console.log(obj1);
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// var obj1 = {
//   prop1: "val1",
//   prop2: "val2",
// };
//
// var obj2 = {
//   prop3: "val3",
//
// };
//
// Object.assign(obj1, obj2);
//
// console.log(obj1);
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// var obj1 = {
//   a: 1
// };
// var obj2 = {
//   b: 2,
//   c: 3
// };
// var obj3 = {
//   d: 4,
//   e: 5,
//   f: 6
// };
// var obj4 = {
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10
// };
//
// Object.assign(obj1, obj2, obj3, obj4);
//
// console.log(obj1);
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// var obj1 = {
//   prop1: "val1"
// };
// var obj2 = {
//   prop2: "val2",
//   prop3: "val3"
// };
// var obj3 = {
//   prop4: "val4",
//   prop5: "val5",
//   prop6: "val6"
// };
//
// Object.assign(obj1, obj2, obj3);
//
// console.log(obj1);
// 
// console.log("..............................");
//
