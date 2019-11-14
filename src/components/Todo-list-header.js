import React, {Component} from 'react';

class TodoListHeader extends Component {
  render () {
    return (
        <thead>
           <tr>
               <td>Task</td>
               <td>Action</td>
            </tr>  
        </thead>
    );
  }
}

export default TodoListHeader;
