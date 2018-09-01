
const isPrime = (num) => {
for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
    return false;
    }
}
return true;
};


export default {
  gameName: 'Prime numbers',
  gameDescription: "Is this number prime?",
  question: '',
  correctAnswer: '',
  generateTask(){
    const number = Math.round(Math.random() * 30) + 2;
    this.correctAnswer = (isPrime(number)) ? 'yes' : 'no';
    this.question = (`${number}`);
  }
}


