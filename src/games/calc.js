export default {
  description: "What is the result of the expression?",
  question: '',
  correctAnswer: '',
  generateTask(){
    const randNumFirst = Math.round(Math.random() * 10);
    const randNumSecond = Math.round(Math.random() * 10);
    const oper = Math.round(Math.random() * 2);
    switch (oper) {
      case 0: this.question = (`${randNumFirst} + ${randNumSecond}`);
        this.correctAnswer = randNumFirst + randNumSecond;
        this.correctAnswer = this.correctAnswer.toString();
        break;
      case 1: this.question = (`${randNumFirst} * ${randNumSecond}`);
        this.correctAnswer = randNumFirst * randNumSecond;
        this.correctAnswer = this.correctAnswer.toString();
        break;
      case 2: this.question = (`${randNumFirst} - ${randNumSecond}`);
        this.correctAnswer = randNumFirst - randNumSecond;
        this.correctAnswer = this.correctAnswer.toString();
        break;
      default:
        break;
    }
    return {
      description: this.description,
      question: this.question,
      correctAnswer: this.correctAnswer,
    }
  }
}
  