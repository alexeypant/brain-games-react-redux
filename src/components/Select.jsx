import React from 'react';
import balance from '../games/balance';
import calc from '../games/calc';
import even from '../games/even';
import gcd from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';

export default class GameSelector extends React.Component {

  games =  {
    'balance': balance,
    'calc': calc,
    'even': even,
    'gcd': gcd,
    'prime': prime,
    'progression': progression,
  }
  
  gamesList = ['balance', 'calc', 'even', 'gcd', 'prime', 'progression'];

  handleSelect = (e) => {
    e.preventDefault();
    const gameSelected = e.target.value;
    if (this.props.activeGame === gameSelected) {
      return;
    }
    this.props.selectGame({ gameName: gameSelected });
    const task = this.games[gameSelected].generateTask();
    this.props.updateTask({ task });
    this.props.updateUIState({ uiState: 'waitingForAnswer' });
  }
    
  render() {
    const { activeGame } = this.props;
    return (
      <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">
        {this.gamesList.map(item => {
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