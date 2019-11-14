import React, {Component} from 'react';
import ToDoList from './todo-list'

//static data
const todos = [
    {
        task: 'brush',
        isComplete: false
    },
    {
        task: 'sleeep',
        isComplete: true
    }
]
//end
class App extends Component {
  render () {
    return (
      <div>
        <h1>React ToDo App</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
