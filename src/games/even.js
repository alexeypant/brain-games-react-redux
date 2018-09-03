export default {
  description: "Is the following number even?",
  question: '',
  correctAnswer: '',
  generateTask(){
    const randNum = Math.round(Math.random() * 100);
    this.question = `${randNum}`;
    this.correctAnswer = (randNum % 2 === 0) ? 'yes' : 'no';
    return {
      description: this.description,
      question: this.question,
      correctAnswer: this.correctAnswer,
    }
  }
}
