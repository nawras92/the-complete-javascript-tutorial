// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 2- getters & methods
// Last Update: 3-11-2020
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
// class User{
//   /* Constructor */
//   constructor(fn, ln, e, un){
//     this.firstName = fn;
//     this.lastName = ln;
//     this.email = e;
//     this.username = un;
//   }
//   /*Methods*/
//   fullName(){
//     return this.firstName + " " + this.lastName;
//   }
//   /*Getters*/
//   get displayFullName(){
//     return this.fullName();
//   }
// }
//
// let user1 = new User("Nawras", "Ali", "nawras@mail.com", "nawras77");
// let user2 = new User("Jad", "Fakhri", "jad@mail.com", "fakhri5");
//
// console.log(user1.displayFullName);
// console.log(user2.displayFullName);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
//
// class Laptop{
//   /* Constructor */
//   constructor(proc, ram, ar, stg){
//     this.processor = proc;
//     this.ram = ram;
//     this.additionalRam = ar;
//     this.storage = stg;
//   }
//   /*Methods*/
//   totalRam(){
//     return this.ram + this.additionalRam;
//   }
//   /*Getters*/
//   get displayTotalRam(){
//     return this.totalRam();
//   }
// }
//
// let laptop1 = new Laptop("i5", 2, 4, "0.5TB");
// let laptop2 = new Laptop("i3", 2, 8, "1TB");
//
// console.log(laptop1.displayTotalRam);
// console.log(laptop2.displayTotalRam);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// class Epic{
//   /*Constructor*/
//   constructor(name, author, lang){
//     this.name = name;
//     this.author = author;
//     this.language = lang;
//   }
//   /*Methods*/
//   info(){
//     return `${this.name} was written by ${this.author} in the ${this.language} language`;
//   }
//   /**Getters**/
//   get displayInfo(){
//     return this.info();
//   }
// }
//
// let epic1 = new Epic("Mahabharata", "Vyasa", "Sanskrit");
// let epic2 = new Epic("Ramayana", "Valmiki", "Sanskrit");
//
// console.log(epic1.displayInfo);
// console.log(epic2.displayInfo);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// class Video{
//   /*Constructor*/
//   constructor(title, len, h, lang, cat){
//     this.title = title;
//     this.length = len;
//   }
//   /* Methods */
//   lengthInMinutes(){
//     return this.length / 60;
//   }
//   /*Getters*/
//   get showLengthInMinutes(){
//     return this.lengthInMinutes();
//   }
// }
//
// let video1 = new Video("Create a WordPress Theme", "3000");
//
// console.log(video1.showLengthInMinutes);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// class Video{
//   /*Constructor*/
//   constructor(title, len, h, lang, cat){
//     this.title = title;
//     this.length = len;
//   }
//   /* Methods */
//   lengthInMinutes(){
//     return this.length / 60;
//   }
//   lengthInHours(){
//     return this.length / 60 / 60;
//   }
//   /*Getters*/
//   get showLengthInMinutes(){
//     return this.lengthInMinutes();
//   }
//   get showLengthInHours(){
//     return this.lengthInHours();
//   }
// }
//
// let video1 = new Video("Create a WordPress Theme", "3000");
//
// console.log(video1.showLengthInHours);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
//   /*Methods*/
//   tenItemsPrice(){
//     return this.price * 10 - this.price;
//   }
//   /*Getters*/
//   get priceOf10(){
//     return this.tenItemsPrice();
//   }
// }
//
// let markerPen1 = new MarkerPen("red", 2);
// let markerPen2 = new MarkerPen("Blue", 2.2);
//
// console.log(markerPen1.priceOf10);
// console.log(markerPen2.priceOf10);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
//   /*Methods*/
//   tenItemsPrice(){
//     return this.price * 10 - this.price;
//   }
//   twentyItemsPrice(){
//     return (this.price * 20) - (this.price * 2);
//   }
//   /*Getters*/
//   get priceOfT10(){
//     return this.tenItemsPrice();
//   }
//   get priceOf20(){
//     return this.twentyItemsPrice();
//   }
// }
//
// let markerPen1 = new MarkerPen("red", 2);
// let markerPen2 = new MarkerPen("Blue", 2.2);
//
// console.log(markerPen1.priceOf20);
// console.log(markerPen2.priceOf20);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// class MarkerPen{
//   /* Constructor */
//   constructor(color, price){
//     this.color = color;
//     this.price = price;
//   }
//   /*Methods*/
//   tenItemsPrice(){
//     return this.price * 10 - this.price;
//   }
//   twentyItemsPrice(){
//     return (this.price * 20) - (this.price * 2);
//   }
//   fiftyItemsPrice(){
//     return (this.price * 50) - 15;
//   }
//   /*Getters*/
//   get priceOfT10(){
//     return this.tenItemsPrice();
//   }
//   get priceOf20(){
//     return this.twentyItemsPrice();
//   }
//   get priceOf50(){
//     return this.fiftyItemsPrice();
//   }
// }
//
// let markerPen1 = new MarkerPen("red", 2);
// let markerPen2 = new MarkerPen("Blue", 2.2);
//
// console.log(markerPen1.priceOf50);
// console.log(markerPen2.priceOf50);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// /*
// let circle = {
//   name: null,
//   radius: null
// }
// */
//
// class Circle{
//
//   constructor(n, r){
//     this.name = n;
//     this.radius = r;
//   }
//
// }
//
// let circle1 = new Circle("My beautiful circle", 5);
//
// console.log(circle1);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// class Circle{
//
//   constructor(n, r){
//     this.name = n;
//     this.radius = r;
//   }
//
//   areaCalc(){
//     const PI = 3.14;
//     return PI * this.radius ** 2;
//   }
//
// }
//
// let circle1 = new Circle("My beautiful circle", 5);
//
// console.log(circle1.areaCalc());
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// class Circle{
//
//   constructor(n, r){
//     this.name = n;
//     this.radius = r;
//   }
//
//   areaCalc(){
//     const PI = 3.14;
//     return PI * this.radius ** 2;
//   }
//
//   get area(){
//     return this.areaCalc();
//   }
//
// }
//
// let circle1 = new Circle("My beautiful circle", 5);
//
// console.log(circle1.area);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// class Circle{
//
//   constructor(n, r){
//     this.name = n;
//     this.radius = r;
//   }
//
//   areaCalc(){
//     const PI = 3.14;
//     return PI * this.radius ** 2;
//   }
//   circumferenceCalc(){
//     const PI = 3.14;
//     return 2 * PI * this.radius;
//   }
//
//   get area(){
//     return this.areaCalc();
//   }
//
// }
//
// let circle1 = new Circle("My beautiful circle", 5);
//
// console.log(circle1.circumferenceCalc());
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// class Circle{
//
//   constructor(n, r){
//     this.name = n;
//     this.radius = r;
//   }
//
//   areaCalc(){
//     const PI = 3.14;
//     return PI * this.radius ** 2;
//   }
//   circumferenceCalc(){
//     const PI = 3.14;
//     return 2 * PI * this.radius;
//   }
//
//   get area(){
//     return this.areaCalc();
//   }
//   get circumference(){
//     return this.circumferenceCalc();
//   }
//
// }
//
// let circle1 = new Circle("My beautiful circle", 5);
//
// console.log(circle1.circumference);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// class Laptop{
// /*
// let website = {
//   name: null,
//   noOfPages: null,
//   averagePageSize: null,
//   noOfMonthlyVisits: null
// }
// */
//
// class Website{
//
//   constructor(n, p, s, v){
//     this.name = n;
//     this.noOfPages = p;
//     this.averagePageSize = s;
//     this.noOfMonthlyVisits = v;
//   }
// }
//
// let website1 = new Website("Learn With Naw", 5, 2, 1000);
//
// console.log(website1);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// class Website{
//
//   constructor(n, p, s, v){
//     this.name = n;
//     this.noOfPages = p;
//     this.averagePageSize = s;
//     this.noOfMonthlyVisits = v;
//   }
//
//   monthlyBandwidthCalc(){
//     return this.averagePageSize * this.noOfMonthlyVisits * this.noOfPages;
//   }
// }
//
// let website1 = new Website("Learn With Naw", 5, 2, 1000);
//
// console.log(website1.monthlyBandwidthCalc());
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// class Website{
//
//   constructor(n, p, s, v){
//     this.name = n;
//     this.noOfPages = p;
//     this.averagePageSize = s;
//     this.noOfMonthlyVisits = v;
//   }
//
//   monthlyBandwidthCalc(){
//     return this.averagePageSize * this.noOfMonthlyVisits * this.noOfPages;
//   }
//
//   get monthlyBandwidth(){
//     return this.monthlyBandwidthCalc();
//   }
// }
//
// let website1 = new Website("Learn With Naw", 5, 2, 1000);
//
// console.log(website1.monthlyBandwidth);
// console.log("..............................");
