"use strict";

// Объект со списком объектов с вопросами и неправильными и правильными ответами ко всем вопросам темы 1

let questionsSubject1 = {

  questions1: {

    questions: "Как создать папку?",
    wrongAnswers: ["mddir", "cddir", "mcdir"],
    rightAnswer: ["mkdir"],
    receivedAnswer: "cddir"
  },

  questions2: {

    questions: "Как посмотреть текущие процессы?",
    wrongAnswers: ["mddir", "cddir", "mcdir"],
    rightAnswer: ["mkdir"],
    receivedAnswer: "cddir"
  },

  questions3: {

    questions: "Что такое grep и для чего он нужен?",
    wrongAnswers: ["mddir", "cddir", "mcdir"],
    rightAnswer: ["mkdir"],
    receivedAnswer: "cddir"
  },

  questions4: {

    questions: "Какой командой можно сгенерировать ssh ключ?",
    wrongAnswers: ["mddir", "cddir", "mcdir"],
    rightAnswer: ["mkdir"],
    receivedAnswer: "cddir"
  },

  questions5: {

    questions: "Что такое Makefile?",
    wrongAnswers: ["mddir", "cddir", "mcdir"],
    rightAnswer: ["mkdir"],
    receivedAnswer: "cddir"
  }
};


// Объект со списком неправильных и правильных ответов к вопросу 1 темы 1

// let answersSubject1 = {
//
//   wrongAnswers: ["mddir", "cddir", "mcdir"],
//   rightAnswer: ["mkdir"],
//   receivedAnswer: "cddir"
// };

// let questions1 = ["Как создать папку?", "Как посмотреть текущие процессы?", "Что такое grep и для чего он нужен?", "Какой командой можно сгенерировать ssh ключ?", "Что такое Makefile?"];

// Объект со списком неправильных и правильных ответов к вопросу 1 темы 2

let answersSubject2 = {

  wrongAnswers: [],
  rightAnswer: [],
  receivedAnswer: ""
};

let questions2 = ["Как создать локальный репозиторий в папке с проектом?", "Как игнорировать файлы и не добавлять их в репозиторий?", "Как создать ветку?", "Как удалить ветку?"];



class Subject {

  constructor(name, time, questionsSubject) {
    this.name = name;
    this.time = time + " hours";
    this.questionsSubject = questionsSubject;
  }

  testAnswer() {

    let answer = this.questionsSubject.receivedAnswer;

    this.questionsSubject.rightAnswer.forEach(function (item) {

      if (answer === item) {
        console.log("Your answer is correct!");
      }
    });

    this.questionsSubject.wrongAnswers.forEach(function (item) {

      if (answer === item) {
        console.log("Think a little more...");
      }
    });

  }
}


let subject1 = new Subject("Bash tools", 48, questionsSubject1);
subject1.testAnswer();

// let subject2 = new Subject("Git tools", 56, questionsSubject2);
// console.log(subject2);
