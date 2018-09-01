const balance = {
    gameName: 'BALANCE',
    gameDescription: "Please answer if the following number is balanced",
    question: '',
    correctAnswer: '',
    generateTask(){
      let A = [];
        for (let i = 0; i < 3; i += 1) {
          A[i] = Math.round(Math.random() * 9);
        }
        this.question = (`${A.join('')}`);
        A = A.sort();
        while ((A[2] - A[0]) > 1) {
          A[0] += 1;
          A[2] -= 1;
          A = A.sort();
      }
      this.correctAnswer = (`${A.join('')}`);
    }
  }
  
  export default balance;