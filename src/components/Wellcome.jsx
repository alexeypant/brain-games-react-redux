import React from 'react';

const Wellcome =  (props) => {
  return (
    <div className="container">
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">Welcome to the Brain Games</h1>
        <p className="lead">Select one of the following games and enjoy</p>
        {props.children}
      </div>
    </div>
    </div>
  );
}

export default Wellcome;
