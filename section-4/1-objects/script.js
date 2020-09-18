// /*
// Course: The complete JavaScript Tutorial
// Course Link: https://js.learnwithnaw.com/
// GitHub Repo.: https://github.com/nawras92/the-complete-javascript-tutorial
// Section: 4
// Lesson: 1- Objects - Introduction
// Last Update: 31-08-2020
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
// var courseTitle = "JavaScript Course";
//
// console.log("..............................");
//
// /*###########*/
//   //Task 2//
// /*###########*/
// console.log("####### Task 2 #######");
// var courseTitle = "JavaScript Course";
// var firstSectionTitle = "JavaScript Basics";
//
// console.log("..............................");
//
// /*###########*/
//   //Task 3//
// /*###########*/
// console.log("####### Task 3 #######");
// var courseTitle = "JavaScript Course";
//
// var firstSectionTitle = "JavaScript Basics";
// var firstSectionLessonsNo = 12;
//
// console.log("..............................");
//
// /*###########*/
//   //Task 4//
// /*###########*/
// console.log("####### Task 4 #######");
// var courseTitle = "JavaScript Course";
//
// var firstSectionTitle = "JavaScript Basics";
// var firstSectionDescription = "Learn the basics of JavaScript in such a simple and easy way";
// var firstSectionLessonsNo = 12;
//
// console.log("..............................");
//
// /*###########*/
//   //Task 5//
// /*###########*/
// console.log("####### Task 5 #######");
// var courseTitle = "JavaScript Course";
//
// var firstSectionTitle = "JavaScript Basics";
// var firstSectionDescription = "Learn the basics of JavaScript in such a simple and easy way.";
// var firstSectionLessonsNo = 12;
//
// var secondSectionTitle = "JavaScript Functions";
// var secondSectionDescription = "Introduction to JavaScript functions and closures.";
// var secondSectionLessonsNo = 5;
//
// console.log("..............................");
//
// /*###########*/
//   //Task 6//
// /*###########*/
// console.log("####### Task 6 #######");
// var courseTitle = "JavaScript Course";
//
// var firstSectionTitle = "JavaScript Basics";
// var firstSectionDescription = "Learn the basics of JavaScript in such a simple and easy way.";
// var firstSectionLessonsNo = 12;
//
// var secondSectionTitle = "JavaScript Functions";
// var secondSectionDescription = "Introduction to JavaScript functions and closures.";
// var secondSectionLessonsNo = 5;
//
// var thirdSectionTitle = "JavaScript Arrays";
// var thirdSectionDescription = "Learn about JavaScript arrays and array helpers.";
// var thirdSectionLessonsNo = 8;
//
// console.log("..............................");
//
// /*###########*/
//   //Task 7//
// /*###########*/
// console.log("####### Task 7 #######");
// function createASection(title, description, lessonsNo){
//   return [title, description, lessonsNo];
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
// console.log(section1);
// console.log(section2);
// console.log(section3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 8//
// /*###########*/
// console.log("####### Task 8 #######");
// function createASection(title, description, lessonsNo){
//   return [title, description, lessonsNo];
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
// console.log(section1[0]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 9//
// /*###########*/
// console.log("####### Task 9 #######");
// function createASection(title, description, lessonsNo){
//   return [title, description, lessonsNo];
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
// console.log(section2[1]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 10//
// /*###########*/
// console.log("####### Task 10 #######");
// var section1 = {
//   title: "JavaScript Basics",
//   description: "Learn the basics of JavaScript in such a simple and easy way.",
//   lessonsNo: 12
// };
//
// console.log(section1["title"]);
// console.log(section1["description"]);
// console.log(section1["lessonsNo"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 11//
// /*###########*/
// console.log("####### Task 11 #######");
// var section2 = {
//   title: "JavaScript Functions",
//   description: "Introduction to JavaScript functions and closures.",
//   lessonsNo: 5
// };
//
// console.log(section2["title"]);
// console.log(section2["description"]);
// console.log(section2["lessonsNo"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 12//
// /*###########*/
// console.log("####### Task 12 #######");
// var section3 = {
//   title: "JavaScript Arrays",
//   description: "Learn about JavaScript arrays and array helpers.",
//   lessonsNo: 8
// };
//
// console.log(section3["title"]);
// console.log(section3["description"]);
// console.log(section3["lessonsNo"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 13//
// /*###########*/
// console.log("####### Task 13 #######");
// function createASection(title, description, lessonsNo){
//   var newSection = {
//     title : title,
//     description : description,
//     lessonsNo : lessonsNo
//   }
//   return newSection;
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
// console.log(section1);
// console.log(section2);
// console.log(section3);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 14//
// /*###########*/
// console.log("####### Task 14 #######");
// function createASection(title, description, lessonsNo){
  //   var newSection = {
    //     title : title,
    //     description : description,
    //     lessonsNo : lessonsNo
    //   }
    //   return newSection;
    // }
    //
    // var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
    // var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
    // var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
    //
    // console.log(section1["title"]);
    //
// console.log("..............................");
//
// /*###########*/
//   //Task 15//
// /*###########*/
// console.log("####### Task 15 #######");
// function createASection(title, description, lessonsNo){
//   var newSection = {
//     title : title,
//     description : description,
//     lessonsNo : lessonsNo
//   }
//   return newSection;
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
//
// console.log(section2["description"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 16//
// /*###########*/
// console.log("####### Task 16 #######");
// function createASection(title, description, lessonsNo){
//   var newSection = {
//     title : title,
//     description : description,
//     lessonsNo : lessonsNo
//   }
//   return newSection;
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
//
// console.log(section3["lessonsNo"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 17//
// /*###########*/
// console.log("####### Task 17 #######");
// function createASection(title, description, lessonsNo, course="JavaScript Course"){
//   var newSection = {
//     title : title,
//     description : description,
//     lessonsNo : lessonsNo,
//     course:  course
//   }
//   return newSection;
// }
//
// var section1 = createASection("JavaScript Basics", "Learn the basics of JavaScript in such a simple and easy way.", 12);
// var section2 = createASection("JavaScript Functions", "Introduction to JavaScript functions and closures.", 5);
// var section3 = createASection("JavaScript Arrays", "Learn about JavaScript arrays and array helpers.", 8 );
//
// console.log(section1["course"]);
// console.log(section2["course"]);
// console.log(section3["course"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 18//
// /*###########*/
// console.log("####### Task 18 #######");
// var course = {
//   title: 'Course title here',
//   description: 'Course description goes here'
// };
//
// console.log(course);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 19//
// /*###########*/
// console.log("####### Task 19 #######");
// var course = {
//   title: 'Course title here',
//   description: 'Course description goes here'
// };
//
// console.log(course["title"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 20//
// /*###########*/
// console.log("####### Task 20 #######");
// var course = {
//   title: 'Course title here',
//   description: 'Course description goes here'
// };
//
// console.log(course["description"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 21//
// /*###########*/
// console.log("####### Task 21 #######");
// function createACourse(title, description){
//   var course = {
//     title: title,
//     description: description
//   };
//
//   return course;
// }
//
// var course1 = createACourse("JavaScript Course", "Learn JavaScript in such an easy and simple way.");
//
// var course2 = createACourse("WordPress Course", "Learn how to develop WordPress themes and plugins");
//
// console.log(course1);
// console.log(course2);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 22//
// /*###########*/
// console.log("####### Task 22 #######");
// var lesson = {
//   title: "Lesson title is here",
//   difficultyLevel: "Easy"
// };
//
// console.log(lesson);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 23//
// /*###########*/
// console.log("####### Task 23 #######");
// var lesson = {
//   title: "Lesson title is here",
//   difficultyLevel: "Easy"
// };
//
// console.log(lesson["title"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 24//
// /*###########*/
// console.log("####### Task 24 #######");
// var lesson = {
//   title: "Lesson title is here",
//   difficultyLevel: "Easy"
// };
//
// console.log(lesson["difficultyLevel"]);
//
// console.log("..............................");
//
// /*###########*/
//   //Task 25//
// /*###########*/
// console.log("####### Task 25 #######");
// function createALesson(title, difficultyLevel){
//   var lesson = {
//     title: title,
//     difficultyLevel: difficultyLevel
//   };
//
//   return lesson;
// }
//
// var lesson1 = createALesson("Array Helpers", "Normal");
//
// var lesson2 = createALesson("Objects", "Easy");
//
// console.log(lesson1);
// console.log(lesson2);
//
// console.log("..............................");
