import React, {Component} from 'react';
import TodoListHeader from './Todo-list-header'

class ToDoList extends Component {
  render () {
    return (
      <table>
        <TodoListHeader />
      </table>
    );
  }
}

export default ToDoList;
