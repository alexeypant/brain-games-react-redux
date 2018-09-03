import React from 'react';

export default class Result extends React.Component {

  onTryAgain = (e) => {
    e.preventDefault();
    this.props.generateNewQuestion();
  }

  render() {
    const { uiState, answer, task: { correctAnswer } } = this.props;
    const isCorrectAnswer = (answer === correctAnswer);

    return (
      uiState === 'showingResult' &&
        <div className="container">
            <div className="card">
                <h4 className={`card-header text-center ${isCorrectAnswer ? 'text-success' : 'text-danger'}`}>
                { isCorrectAnswer ? 'Very good' : 'The answer is wrong...' }
                </h4>
                <div className="card-body">
                    <button type="button" 
                    onClick={this.onTryAgain}
                    className="btn btn-info btn-block" 
                    data-dismiss="modal">Try again</button>
                </div>
            </div>
        </div>
    );
  }
}
