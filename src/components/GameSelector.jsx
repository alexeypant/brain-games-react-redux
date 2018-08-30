import React from 'react';

export default class GameSelector extends React.Component {

  handleSelect = (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.value);
  }
    
  render() {
    const { activeGame } = this.props;
    return (
      <div 
        className="btn-group btn-group-toggle" 
        data-toggle="buttons">
        <label className={`btn btn-secondary ${(activeGame === 'balance') && 'active'}`}>
          <input onClick={this.handleSelect} 
            type="radio" name="options" 
            id="option1" autoComplete="off" 
            value="balance"/> Balance
        </label>
        <label className={`btn btn-secondary ${(activeGame === 'calc') && 'active'}`}>
          <input onClick={this.handleSelect} 
            type="radio" name="options" 
            id="option2" autoComplete="off" 
            value="calc" /> Calc
        </label>
        <label className={`btn btn-secondary ${(activeGame === 'even') && 'active'}`}>
          <input onClick={this.handleSelect}
            type="radio" name="options" 
            id="option3" autoComplete="off" 
            value="even" /> Even
        </label>
        <label className={`btn btn-secondary ${(activeGame === 'gcd') && 'active'}`}>
            <input onClick={this.handleSelect} 
              type="radio" name="options" 
              id="option3" autoComplete="off" 
              value="gcd" /> GCD
        </label>
        <label className={`btn btn-secondary ${(activeGame === 'prime') && 'active'}`}>
            <input onClick={this.handleSelect} 
              type="radio" name="options" 
              id="option3" autoComplete="off" 
              value="prime" /> Prime
        </label>
        <label className={`btn btn-secondary ${(activeGame === 'progression') && 'active'}`}>
            <input onClick={this.handleSelect} 
              type="radio" name="options" 
              id="option3" autoComplete="off" 
              value="progression" /> Progression
        </label>
      </div>
    );
  }
}