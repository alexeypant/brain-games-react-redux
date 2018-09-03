import React from 'react';
import Wellcome from './Wellcome';
import Task from '../containers/Task';
import Select from '../containers/Select';
import Answer from '../containers/Answer';
import Result from '../containers/Result';
import balance from '../games/balance';
import calc from '../games/calc';
import even from '../games/even';
import gcd from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';

export default class App extends React.Component {

  games = {
    'balance': balance,
    'calc': calc,
    'even': even,
    'gcd': gcd,
    'prime': prime,
    'progression': progression,
  }

  generateNewQuestion = () => {
    const task = this.games[this.props.activeGame].generateTask();
    this.props.updateTask({ task });
    this.props.updateUIState( {uiState: 'waitingForAnswer'} );
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
        <Select />      
      </Wellcome>
      <Task />
      <Answer generateNewQuestion={this.generateNewQuestion} />
      <Result generateNewQuestion={this.generateNewQuestion} />
    </div>
    );
  }
}
