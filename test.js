"use strict";


class Question {

  constructor(question, wrongAnswers, rightAnswer, receivedAnswer) {
    this.question = question;
    this.wrongAnswers = wrongAnswers;
    this.rightAnswer = rightAnswer;
    this.receivedAnswer = receivedAnswer;
  }
}

let question1 = new Question("Как создать папку?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let question2 = new Question("Как посмотреть текущие процессы?",["pro", "hop", "procces"],["top"],"pro");
let question3 = new Question("Какой командой можно сгенерировать ssh ключ?",["ssh", "ssh-key", "sshkey"],["ssh-keygen"],"ssh");

function createQuestions() {

  let sub1 = {question1, question2, question3};
  let listQuestions = {};

  for (let key in sub1) {

    let string = JSON.stringify(sub1[key]);
    listQuestions[key] = JSON.parse(string);
  }
  return listQuestions
}

console.log(createQuestions());
