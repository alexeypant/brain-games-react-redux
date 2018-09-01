import React from 'react';
import Wellcome from './Wellcome';
import GameSelector from './GameSelector';
import Game from './Game';
import AnswerForm from './AnswerForm';
import ResultCard from './ResultCard';
import balance from '../games/balance';
import calc from '../games/calc';
import even from '../games/even';
import gcd from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';

export default class App extends React.Component {
  
  state = {
    gamesList: ['balance', 'calc', 'even', 'gcd', 'prime', 'progression'],
    activeGame: '',
    gameDescription: '',
    question: '',
    isCorrectAnswer: true,
    uiState: 'gameSelection',
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
    this.games[gameName]['generateTask']();
    this.setState({
      activeGame: gameName,
      gameDescription: this.games[gameName]['gameDescription'],
      question: this.games[gameName]['question'],
      uiState: 'waitingForAnswer',
    });
  }

  generateNewQuestion = () => {
    this.games[this.state.activeGame]['generateTask']();
    this.setState({
      gameDescription: this.games[this.state.activeGame]['gameDescription'],
      question: this.games[this.state.activeGame]['question'],
      uiState: 'waitingForAnswer',
    });
  }

  onAnswerSubmit = (answer) => {
    const correctAnswer = this.games[this.state.activeGame]['correctAnswer'];
    this.setState({
      isCorrectAnswer: answer === correctAnswer,
      uiState: 'showingResult',
    });
  }


  render() {
    return (
    <div>
      <Wellcome>
        <GameSelector onSelect={this.onSelect} activeGame={this.state.activeGame} gamesList={this.state.gamesList} />      
      </Wellcome>
      <Game 
        activeGame={this.state.activeGame}
        gameDescription={this.state.gameDescription} 
        question={this.state.question}
        uiState={this.state.uiState} />
      <AnswerForm 
        activeGame={this.state.activeGame}
        onAnswerSubmit={this.onAnswerSubmit} 
        generateNewQuestion={this.generateNewQuestion} 
        uiState={this.state.uiState} />
      <ResultCard 
        isCorrectAnswer={this.state.isCorrectAnswer} 
        generateNewQuestion={this.generateNewQuestion} 
        uiState={this.state.uiState} />
    </div>
    );
  }
}
