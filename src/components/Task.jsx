import React from 'react';

export default class Task extends React.Component {
  
  render() {

    const { description, question } = this.props.task;

    return (
    this.props.uiState === 'waitingForAnswer' &&
    <div className="container">
      <div className="card text-center">
          <div className="card-header">
            <h4>{description}</h4>
          </div>
          <div className="card-body">
              <h5 className="card-title">{question}</h5>
          </div>
      </div>
    </div>
    );
  }
}

