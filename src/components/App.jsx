import React from 'react';
import { updateNewTaskText, addTask } from '../actions';

export default class App extends React.Component {
    addTask = (e) => {
      e.preventDefault();
      this.props.dispatch(addTask({ text: this.props.newTaskText }));
    };

    updateNewTaskText = (e) => {
      this.props.dispatch(updateNewTaskText({ text: e.target.value }));
    };

    renderTasks = (tasksFromState) => {
      const tasks = Object.values(tasksFromState);
      if (tasks.length === 0) {
        return null;
      }
      return (
        <div className="mt-3">
          <ul className="list-group">
            {tasks.map(({ id, text }) => (
              <li key={id} className="list-group-item d-flex justify-content-end">
                {text}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    render() {
      const { tasks, newTaskText } = this.props;
      return (
        <div className="col-5">
          <form action="" className="form-inline" onSubmit={this.addTask}>
            <div className="form-group mx-sm-3">
              <input type="text" required value={newTaskText} onChange={this.updateNewTaskText} />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Add</button>
          </form>
          {this.renderTasks(tasks)}
        </div>
      );
    }
}
