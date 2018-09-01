import React from 'react';

export default class GameSelector extends React.Component {

  handleSelect = (e) => {
    e.preventDefault();
    if (this.props.activeGame === e.target.value) {
      return;
    }
    this.props.onSelect(e.target.value);
  }
    
  render() {
    const { activeGame } = this.props;
    return (
      <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">
        {this.props.gamesList.map(item => {
          return <label 
            key={item}
            className={`btn btn-secondary ${(activeGame === item) && 'active'}`}>
            <input onClick={this.handleSelect} 
              type="radio" name="options" 
              autoComplete="off" 
              value={item}/> {item}
        </label>})}
      </div>
    );
  }
}