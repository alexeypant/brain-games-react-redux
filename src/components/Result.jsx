import React from 'react';

export default class Result extends React.Component {

  render() {
    const { result } = this.props;
    return (
        result !== 'requesting' ? 
        <div className="card">
            <div className="card-header">
                {result === 'right' ? 'Very good' : 'The answer is wrong...' }
            </div>
        </div> : null
    );
  }
}
