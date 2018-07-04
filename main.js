"use strict";

const { Course } = require("./classes");
const { Subject } = require("./classes");
const { Question } = require("./classes");
const { Answer } = require("./classes");

let ans11 = new Answer("bash", true);
let ans12 = new Answer("no bash", false);
let ans13 = new Answer("bax", false);

let ans1 = {ans11, ans12, ans13};

let ans21 = new Answer("bash", true);
let ans22 = new Answer("no bash", false);
let ans23 = new Answer("bax", false);

let ans2 = {ans21, ans22, ans23};

let ans31 = new Answer("bash", true);
let ans32 = new Answer("no bash", false);
let ans33 = new Answer("bax", false);

let ans3 = {ans31, ans32, ans33};



let question11 = new Question("What is bash?", ans1);
let question12 = new Question("What is ", ans2);
let question13 = new Question("What?", ans3);

let obj1 = {question11, question12, question13};

let question21 = new Question("What is git?");
let question22 = new Question("What is ");
let question23 = new Question("What?");

let obj2 = {question21, question22, question23};



let bash = new Subject("Bash", obj1);

let git = new Subject("Git", obj2);

let subjects = {bash, git};



let backend = new Course("Back-end", subjects);
console.log(backend);