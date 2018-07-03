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

let sub1Question1 = new Question("Как создать папку?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let sub1Question2 = new Question("Как посмотреть текущие процессы?",["pro", "hop", "procces"],["top"],"pro");
let sub1Question3 = new Question("Какой командой можно сгенерировать ssh ключ?",["ssh", "ssh-key", "sshkey"],["ssh-keygen"],"ssh");

let sub2Question1 = new Question("Как создать локальный репозиторий в папке с проектом?",["mddir", "cddir", "mcdir"],["mkdir"],"cddir");
let sub2Question2 = new Question("Как создать ветку?",["git", "branch", "git b"],["git branch"],"git b");
let sub2Question3 = new Question("Как удалить ветку?",["git b -d", "git branch", "git -d"],["git branch -d"],"git branch");

module.exports = {

  sub1Question1,
  sub1Question2,
  sub1Question3,
  sub2Question1,
  sub2Question2,
  sub2Question3
};