import React from 'react';

export default class AnswerForm extends React.Component {
  state = {
    input: '',
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onAnswerSubmit(this.state.input);
    this.setState({
      input: '',
    });
  }

  render() {

    return (
      <div className="container-fluide">
        <form onSubmit={this.onFormSubmit}>
            <div className="form-row align-items-center">
            <div className="col-auto">
                <input type="text" 
                onChange={this.onInputChange}
                value={this.state.input}
                placeholder="You answer" />
            </div>    
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
            </div>
        </form>
      </div>
    );
  }
}
