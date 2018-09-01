import React from 'react';

export default class Game extends React.Component {

  render() {
    const { uiState } = this.props;
    return (
    uiState === 'waitingForAnswer' &&
    <div className="container">
      <div className="card text-center">
          <div className="card-header">
            <h4>{this.props.gameDescription}</h4>
          </div>
          <div className="card-body">
              <h5 className="card-title">{this.props.question}</h5>
          </div>
      </div>
    </div>
    );
  }
}
