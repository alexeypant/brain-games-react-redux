import React from 'react';

export default class Answer extends React.Component {
  state = {
    input: '',
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  onYesNoClick = (e) => {
    e.preventDefault();
    this.props.submitAnswer({ answer: e.target.value });
    this.props.updateUIState({ uiState: 'showingResult'});
    this.setState({
      input: '',
    });

  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.submitAnswer({ answer: this.state.input });
    this.props.updateUIState({ uiState: 'showingResult'});
    this.setState({
      input: '',
    });
  }

  onGenerateNewQuestion = (e) => {
    e.preventDefault();
    this.props.generateNewQuestion();
  }

  renderYesNoForm(){
    return (
      <div>
        <div className="row input-group-append">
          <button className="col-6 btn btn-outline-primary" 
              onClick={this.onYesNoClick} 
              value="yes"
              type="button">YES</button>
          <button className="col-6 btn btn-outline-primary" 
              onClick={this.onYesNoClick} 
              value="no"
              type="button">NO</button>
        </div>
        <div className="row input-group-append">
          <button className="col-12 btn btn-outline-secondary" 
                onClick={this.onGenerateNewQuestion}
                type="button">Generate new question</button>
        </div>
      </div>
    );
  }

  renderInputForm(){
    return <div className="input-group">
      <input type="text" 
        className="form-control" 
        onChange={this.onInputChange} 
        value={this.state.input}
        placeholder="You answer" 
        aria-label="Recipient's username with two button addons" 
        aria-describedby="button-addon4" />
      <div className="input-group-append" id="button-addon4">
        <button onClick={this.onFormSubmit} 
          className="btn btn-outline-primary" 
          type="button">Submit your answer</button>
        <button className="btn btn-outline-primary" 
          onClick={this.onGenerateNewQuestion}
          type="button">Generate new question</button>
      </div>
    </div>
  }

  render() {
    const { uiState, activeGame } = this.props;
    return (
      uiState === 'waitingForAnswer' &&
      <div className="container">
        {(activeGame === 'balance' || 
          activeGame === 'even' || 
          activeGame === 'prime') ? this.renderYesNoForm() : this.renderInputForm()}
      </div>
    );
  }
}