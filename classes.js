"use strict";

class Question {

  constructor(question, wrongAnswers, rightAnswer, receivedAnswer) {
    this.question = question;
    this.wrongAnswers = wrongAnswers;
    this.rightAnswer = rightAnswer;
    this.receivedAnswer = receivedAnswer;
  }

  testAnswer() {

    let answer = this.receivedAnswer;

    this.rightAnswer.forEach(function (item) {

      if (answer === item) {
        console.log("Your answer is correct!");
      }
    });

    this.wrongAnswers.forEach(function (item) {

      if (answer === item) {
        console.log("Think a little more...");
      }
    });
  }
}

class Subject {

  constructor(name, time, listQuestions) {
    this.name = name;
    this.time = time + " hours";
    this.listQuestions = listQuestions;
  }
}

module.exports = {

  Question,
  Subject
};