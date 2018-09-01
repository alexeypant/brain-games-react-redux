import React from 'react';
import cn from 'classnames';

export default class Result extends React.Component {

  onTryAgain = (e) => {
    e.preventDefault();
    this.props.generateNewQuestion();
  }

  render() {
    const { isCorrectAnswer, uiState } = this.props;
    const classModal = cn({
      'modal':  true,
      'fade': uiState === 'showingResult',
      'show': uiState === 'showingResult',
    });

    const styleModal = uiState === 'showingResult' ? {'display': 'block'} : {'display': 'none'}

    return (

        <div className={classModal} style={styleModal} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">
                    { isCorrectAnswer ? 'Very good' : 'The answer is wrong...' }
                  </h5>
                </div>
                <div className="modal-footer">
                <button type="button" 
                  onClick={this.onTryAgain}
                  className="btn btn-info" 
                  data-dismiss="modal">Try again</button>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
