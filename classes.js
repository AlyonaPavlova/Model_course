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
    this.stateStatus = 1;  // Когда мы создаем новую тему, ее статус равен 1, т.е. она открыта

    Subject.count++;
  }

  get open() {
    this.stateStatus = 1; // При вызове функции состояние темы переходит в открытое
  }

  get close() {
    this.stateStatus = 0; // При вызове функции состояние темы переходит в закрытое
  }

  get stateString() {              // Проверяем состояние темы и выводим сообщение о состоянии

    switch (this.stateStatus) {
      case this.stateStatus === 1:
        return "Subject is open";

      case this.stateStatus === 0:
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
    this.allSubjects = Subject.count;
    this.studiedSubjects = studiedSubjects;

    Student.count++;
  }

   countingSubjects() {  // Функция для подсчета закрытых тем студента (т.е. пройденных)

    if(this.stateStatus === 0) {  // Нужно получить доступ к конкретному экземпляру темы

      this.studiedSubjects += 1; // Если состояние темы = закрытому, то прибавляем к значению пройденных тем 1
    }

    // Subject.close();
  }
}

class Curator extends User {

  constructor(name, numberStudents) {
    super(name);
    this.numberStudents = numberStudents;

    Curator.count++;
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