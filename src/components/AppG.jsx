import React from 'react';
import Wellcome from './Wellcome';
import GameSelector from './GameSelector';
import Game from './Game';
import AnswerForm from './AnswerForm';
import Result from './Result';
import balance from '../games/balance';
import calc from '../games/calc';
import even from '../games/even';
import gcd from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';

export default class AppG extends React.Component {
  
  state = {
    activeGame: 'balance',
    result: 'requesting',
  };

  games = {
    'balance': balance,
    'calc': calc,
    'even': even,
    'gcd': gcd,
    'prime': prime,
    'progression': progression,
  }

  onSelect = (gameName) => {
    this.setState({
      activeGame: gameName,
    });
  }

  generateNewGame = () => {
    this.games[this.state.activeGame]['generateTask']();
  }

  onAnswerSubmit = (answer) => {
    const correctAnswer = this.games[this.state.activeGame]['correctAnswer'];
    this.setState({
      result: answer === correctAnswer ? 'right' : 'wrong',
    });
  }


    render() {
      this.generateNewGame();
      const gameInfo = { 
          gameName: this.games[this.state.activeGame]['gameName'],
          gameDescription: this.games[this.state.activeGame]['gameDescription'],
          question: this.games[this.state.activeGame]['question'],
      }
      return (
      <div>
        <Wellcome>
          <GameSelector onSelect={this.onSelect} activeGame={this.state.activeGame} />      
        </Wellcome>
        <Game {...gameInfo}  />
        <AnswerForm onAnswerSubmit={this.onAnswerSubmit} />
        <Result result={this.state.result} />
      </div>
      );
    }
}
