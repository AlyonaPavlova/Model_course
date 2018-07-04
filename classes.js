"use strict";

class Course {

  constructor(name, subjects) {
    this.name = name;
    this.subjects = subjects;
  }
}

class Subject {

  constructor(name, listQuestions) {
    this.name = name;
    this.listQuestions = listQuestions;
  }
}

class Question {

  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}

class Answer {

  constructor(name, correct) {
    this.name = name;
    this.correct = correct;
  }
}

module.exports = {

  Course,
  Subject,
  Question,
  Answer
};