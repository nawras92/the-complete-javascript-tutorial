// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 6
// Lesson: 3 - Getters & Methods
// Last Update: 07-11-2020
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
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this.width = width;
//     this.height = height;
//     this.thickness = thickness;
//     this.material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this.width;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.width);
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this.height = height;
//     this.thickness = thickness;
//     this.material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.width);
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this.$width = width;
//     this.height = height;
//     this.thickness = thickness;
//     this.material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this.$width;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.width);
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this.Owidth = width;
//     this.height = height;
//     this.thickness = thickness;
//     this.material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this.Owidth;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.width);
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
//
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this._height = height;
//     this._thickness = thickness;
//     this._material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.height);
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
//
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this._height = height;
//     this._thickness = thickness;
//     this._material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get thickness(){
//     return this._thickness;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.thickness);
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");

//class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this._height = height;
//     this._thickness = thickness;
//     this._material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get thickness(){
//     return this._thickness;
//   }
//   get material(){
//     return this._material;
//   }
// }
//
// let door1 = new Door(0.9, 2.1, 0.24, "Wood");
//
// console.log(door1.material);
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
//
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this._height = height;
//     this._thickness = thickness;
//     this._material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get thickness(){
//     return this._thickness;
//   }
//   get material(){
//     return this._material;
//   }
//
//   /*Setters*/
//   set width(w){
//     this._width = w;
//   }
// }
//
// let door1 = new Door();
// door1.width = 1.1;
// console.log(door1.width);
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
//
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this._height = height;
//     this._thickness = thickness;
//     this._material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get thickness(){
//     return this._thickness;
//   }
//   get material(){
//     return this._material;
//   }
//
//   /*Setters*/
//   set width(w){
//     this._width = w;
//   }
//   set height(h){
//     this._height = h;
//   }
// }
//
// let door1 = new Door();
// door1.height = 1.5;
// console.log(door1.height);
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
//
// class Door{
//
//   /*Constructors*/
//   constructor(width, height, thickness, material){
//     this._width = width;
//     this._height = height;
//     this._thickness = thickness;
//     this._material = material;
//   }
//
//   /*Getters*/
//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get thickness(){
//     return this._thickness;
//   }
//   get material(){
//     return this._material;
//   }
//
//   /*Setters*/
//   set width(w){
//     this._width = w;
//   }
//   set height(h){
//     this._height = h;
//   }
//   set thickness(t){
//     this._thickness = t;
//   }
//   set material(m){
//     this._material = m;
//   }
// }
//
// let door1 = new Door();
// door1.material = "Iron";
// console.log(door1.material);
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
//
// class User{
//
//   /*constructor*/
//   constructor(name, password){
//     this._name = name;
//     this._password = password;
//   }
//
//   /*Methods*/
//   validatePassword(password){
//     return password.toString().length > 12 ? true : false;
//   }
//
//   /*Setters*/
//   set password(p){
//     if(this.validatePassword(p)){
//       this._password = p;
//     }
//   }
//
//   /*Getters*/
//   get password(){
//     return this._password;
//   }
// }
//
// let user1 = new User("Nawras", "sjdkspabhfsd");
// user1.password = "123";
//
// console.log(user1.password);
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// class User{
//
//   /*constructor*/
//   constructor(name, password){
//     this._name = name;
//     this._password = password;
//   }
//
//   /*Methods*/
//   validatePassword(password){
//     return password.toString().length > 12 ? true : false;
//   }
//
//   /*Setters*/
//   set password(p){
//     if(this.validatePassword(p)){
//       this._password = p;
//     }
//   }
//
//   /*Getters*/
//   get password(){
//     return this._password;
//   }
// }
//
// let user1 = new User("Nawras", "sjdkspabhfsd");
// user1.password = "imverystrongpassword";
//
// console.log(user1.password);
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
//
// class Student{
//
//   /* Constructor */
//   constructor(id, name, mark1, mark2, mark3, mark4){
//     this.id = id;
//     this.name = name;
//     this.mark1 = mark1;
//     this.mark2 = mark2;
//     this.mark3 = mark3;
//     this.mark4 = mark4;
//   }
//
//   /* Methods */
//   studentAverage(){
//     return (this.mark1 + this.mark2 + this.mark3 + this.mark4) / 4;
//   }
//   passed(){
//     return this.studentAverage() >= 60 ? "has passed" : "has failed";
//   }
//   _info(){
//     return `The student ${this.name} of the id ${this.id} got an average of ${this.studentAverage()}%. ${this.name} ${this.passed()}.`
//   }
//
//   /* Getters */
//   get info(){
//     return this._info();
//   }
// }
//
// let student1 = new Student(56, "Ali Ali", 60, 50, 70, 90);
// console.log(student1.info);
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
//
// class diskSpace{
//
//   /* Constructor */
//   constructor(id, size){
//     this.id = id;
//     this.size = size; // in bytes
//   }
//
//   /* Methods */
//   sizeInKB(){
//       return this.size / 1024;
//   }
//   sizeInMB(){
//       return this.size / 1024 / 1024;
//   }
//   sizeInGB(){
//       return this.size / 1024 / 1024 / 1024;
//   }
//
//   /* Getters */
//   get KB(){
//     return this.sizeInKB();
//   }
//   get MB(){
//     return this.sizeInMB();
//   }
//   get GB(){
//     return this.sizeInGB();
//   }
// }
//
// let space1 = new diskSpace(45, 1024);
// let space2 = new diskSpace(55, 2048000);
// let space3 = new diskSpace(87, 5000000540);
//
// console.log(space1.KB);
// console.log(space2.MB);
// console.log(space3.GB);
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
//
// /*
// let vehicle = {
//   name: null,
//   type: null,
//   color: null
// }
// */
//
// class Vehicle{
//
//   /* Constructor */
//   constructor(name, type, color){
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }
//
// let vehicle1 = new Vehicle("Alfa Romeo", "car", "red");
// let vehicle2 = new Vehicle("Honda", "truck", "white");
//
// console.log(vehicle1);
// console.log(vehicle2);
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
//
// /*
// let vehicle = {
//   name: null,
//   type: null,
//   color: null,
//   info: function(){
//     return `The ${this.color} ${this.name} is an amazing ${this.type} vehicle`;
//   }
// }
// */
//
// class Vehicle{
//
//   /* Constructor */
//   constructor(name, type, color){
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
//
//   /* Methods */
//   info(){
//     return `The ${this.color} ${this.name} is an amazing ${this.type} vehicle`;
//   }
// }
//
// let vehicle1 = new Vehicle("Alfa Romeo", "car", "red");
// let vehicle2 = new Vehicle("Honda", "truck", "white");
//
// console.log(vehicle1.info());
// console.log(vehicle2.info());
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
//
// class Vehicle{
//
//   /* Constructor */
//   constructor(name, type, color){
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
//
//   /* Methods */
//   _info(){
//     return `The ${this.color} ${this.name} is an amazing ${this.type} vehicle`;
//   }
//
//   /* Getters */
//   get info(){
//     return this._info();
//   }
// }
//
// let vehicle1 = new Vehicle("Alfa Romeo", "car", "red");
// let vehicle2 = new Vehicle("Honda", "truck", "white");
//
// console.log(vehicle1.info);
// console.log(vehicle2.info);
// console.log("..............................");
