"use strict";

const { Question } = require("./classes");
const { Subject } = require("./classes");
const { User } = require("./classes");
const { Student } = require("./classes");
const { Curator } = require("./classes");
const { Course } = require("./classes");

let sub1Question1 = new Question("Как создать папку?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let sub1Question2 = new Question("Как посмотреть текущие процессы?",["pro", "hop", "procces"],["top"],"pro");
let sub1Question3 = new Question("Какой командой можно сгенерировать ssh ключ?",["ssh", "ssh-key", "sshkey"],["ssh-keygen"],"ssh");

let sub2Question1 = new Question("Как создать локальный репозиторий в папке с проектом?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let sub2Question2 = new Question("Как создать ветку?",["git", "branch", "git b"],["git branch"],"git b");
let sub2Question3 = new Question("Как удалить ветку?",["git b -d", "git branch", "git -d"],["git branch -d"],"git branch");

let subject1Questions = {sub1Question1, sub1Question2, sub1Question3};

// let subject1 = new Subject("Bash tools", 48, subject1Questions);
// console.log(subject1);

Subject.count = 0;
Student.count = 0;
Curator.count = 0;

Subject.showSubjects = function () {
  console.log("Total " + this.count)
};

Student.showSubjects = function () {
  console.log("Total " + this.count)
};

Curator.showSubjects = function () {
  console.log("Total " + this.count)
};

let subject1 = new Subject("Bash tools", 48, subject1Questions);
console.log(subject1);
new Subject();
new Subject();
new Subject();

// Subject.showSubjects();

new Student();
new Student();
new Curator();

// Student.showSubjects();
// Curator.showSubjects();


Subject.countingSubjects = function () {

  let allSubjectsStudent = [];

  for (let i = 0; i < Subject.count; i++) {

    allSubjectsStudent.push(subject1);  // Отследить создание new Subject(); и записать в массив этот экземпляр
  }

  return allSubjectsStudent;
};

console.log(Subject.countingSubjects());

// let a = new Course("Back-end", 3, Subject.showSubjects(), Student.showSubjects(), Curator.showSubjects());
// console.log(a);

let b = new Student("alena");
// console.log(b);
