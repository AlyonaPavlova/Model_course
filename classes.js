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

  constructor(name, time, listQuestions, state) {
    this.name = name;
    this.time = time + " hours";
    this.listQuestions = listQuestions;
    this.state = state || this.stateOpen; // Если состояние темы не указано, значит она открыта
  }

  stateOpen = 1;
  stateClose = 0;

  get open() {
    this.state = this.stateOpen;  // При вызове функции состояние темы переходит в открытое
  }

  get close() {
    this.state = this.stateClose; // При вызове функции состояние темы переходит в закрытое
  }

  get stateString() {              // Проверяем состояние темы и выводим сообщение о состоянии

    switch (this.state) {
      case this.stateOpen:
        return "Subject is open";

      case this.stateClose:
        return "Subject is close";
    }
  }

  get showState() {

    console.log(this.stateString());
  }
}

class User {

  constructor(name) {
    this.name = name;
  }
}

class Student extends User {

  constructor(name, studiedSubjects) {
    super(name);
    this.studiedSubjects = studiedSubjects;
  }

  static countingSubjects() {  // Функция для подсчета закрытых тем студента (т.е. пройденных)

    if(this.state = this.stateClose) {

      this.studiedSubjects += 1; // Если состояние темы = закрытому, то прибавляем к значению пройденных тем 1
    }

    // Subject.close();
  }
}

class Curator extends User {

  constructor(name, numberStudents) {
    super(name);
    this.numberStudents = numberStudents;
  }

  static  countingStudents() {  // Функция должна складывать количество созданных экземпляров класса Student для конкретного куратора

  }

  static changeSubject() {  // Функция может менять статус темы студентов

  }
}

class Course {

  constructor(name, numberHours, subjects, students, curators) {
    this.name = name;
    this.numberHours = numberHours;
    this.subjects = subjects;
    this.students = students;
    this.curators = curators;
  }

  static countingHours() {

    // Subject.constructor.time Тут нужно как-то сложить количество часов всех экземпляров тем
  }

  static countingSubjects() {  // Функция создает массив со всеми темами

  }

  static countingStudents() {  // Функция создает массив со всеми студентами

  }

  static countingCurators() {  // Функция создает массив со всеми кураторами

  }
}

module.exports = {

  Question,
  Subject,
  User,
  Student,
  Curator,
  Course
};