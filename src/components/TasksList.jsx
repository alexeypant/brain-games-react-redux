import React from 'react';

export default class TasksList extends React.Component {
    removeTask = id => (e) => {
        e.preventDefault();
        this.props.removeTask({ id });
    }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text }) => (
            <li key={id} className="list-group-item d-flex justify-content-end">
              <div className="mr-auto">{text}</div>
              <button className="btn border-0 p-0 app-remove-task" onClick={this.removeTask(id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}