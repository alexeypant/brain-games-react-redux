const generateProgression = () => {
  const start = Math.round(Math.random() * 10);
  const step = Math.round(Math.random() * 5);
  const array = [];
  array[0] = start;
  for (let i = 1; i < 10; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

export default {
  gameName: 'Progression',
  gameDescription: "What number is missing in this progression?",
  question: '',
  correctAnswer: '',
  generateTask(){
    const array = generateProgression();
    const index = Math.round(Math.random() * 9);
    this.correctAnswer = array[index];
    this.correctAnswer = this.correctAnswer.toString();
    array[index] = '..';
    this.question = (`${array.join(' ')}`);
    return {
      description: this.description,
      question: this.question,
      correctAnswer: this.correctAnswer,
    }
  }
}
