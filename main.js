"use strict";

const { sub1Question1 } = require("./question_class");
const { sub1Question2 } = require("./question_class");
const { sub1Question3 } = require("./question_class");
const { sub2Question1 } = require("./question_class");
const { sub2Question2 } = require("./question_class");
const { sub2Question3 } = require("./question_class");


function createQuestions(question1, question2, question3) {

  let subjectQuestions = {question1, question2, question3};

  let listQuestions = {};

  for (let key in subjectQuestions) {

    let string = JSON.stringify(subjectQuestions[key]);
    listQuestions[key] = JSON.parse(string);
  }
  return listQuestions
}

// console.log(createQuestions(sub1Question1, sub1Question2, sub1Question3));

class Subject {

  constructor(name, time, listQuestions) {
    this.name = name;
    this.time = time + " hours";
    this.listQuestions = listQuestions;
  }

  
}

let subject1 = new Subject("Bash tools", 48, createQuestions(sub1Question1, sub1Question2, sub1Question3));
console.log(subject1);