const getGCD = (a, b) => {
  if (b === 0) {
    return (a < 0) ? -a : a;
  }
  return getGCD(b, a % b);
};

export default {
  description: "Find the greatest common divisor of the given numbers.",
  question: '',
  correctAnswer: '',
  generateTask(){
    let a = 0;
    let b = 0;
    while (a === 0 || b === 0) {
      a = Math.round(Math.random() * 100);
      b = Math.round(Math.random() * 100);
    }
    this.question = (`${a} and ${b}`);
    this.correctAnswer = getGCD(a, b).toString();
    return {
      description: this.description,
      question: this.question,
      correctAnswer: this.correctAnswer,
    }
  }
}
