import React from 'react';

export default class ResultCard extends React.Component {

  onTryAgain = (e) => {
    e.preventDefault();
    this.props.generateNewQuestion();
  }

  render() {
    const { isCorrectAnswer, uiState } = this.props;

    return (
        uiState === 'showingResult' &&
        <div className="container">
            <div className="card">
                <h4 className={`card-header text-center ${isCorrectAnswer ? 'text-success' : 'text-danger'}`}>
                { isCorrectAnswer ? 'Very good' : 'The answer is wrong...' }
                </h4>
                <div className="card-body">
                    {/* <h5 className="card-title">The correct answer is</h5>
                    <p className="card-text">the following</p> */}
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







