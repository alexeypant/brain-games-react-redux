import React from 'react';

export default class Game extends React.Component {

  render() {
    return (
    <div className="card">
        <div className="card-header">
          {this.props.gameName}
        </div>
        <div className="card-body">
            <h5 className="card-title">{this.props.gameDescription}</h5>
            <p className="card-text">{this.props.question}</p>
        </div>
    </div>
    );
  }
}
