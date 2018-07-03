"use strict";

const { Question } = require("./classes");
const { Subject } = require("./classes");

let sub1Question1 = new Question("Как создать папку?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let sub1Question2 = new Question("Как посмотреть текущие процессы?",["pro", "hop", "procces"],["top"],"pro");
let sub1Question3 = new Question("Какой командой можно сгенерировать ssh ключ?",["ssh", "ssh-key", "sshkey"],["ssh-keygen"],"ssh");

let sub2Question1 = new Question("Как создать локальный репозиторий в папке с проектом?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let sub2Question2 = new Question("Как создать ветку?",["git", "branch", "git b"],["git branch"],"git b");
let sub2Question3 = new Question("Как удалить ветку?",["git b -d", "git branch", "git -d"],["git branch -d"],"git branch");

let subject1Questions = {sub1Question1, sub1Question2, sub1Question3};

let subject1 = new Subject("Bash tools", 48, subject1Questions);
console.log(subject1);