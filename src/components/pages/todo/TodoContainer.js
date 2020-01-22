import React from 'react';
import Axios from 'axios';

import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

class TodoContainer extends React.Component {

  state = {
    todoList: []
  }

  constructor(props) {
    super(props)
    this.getTodoList()
  }

  getTodoList = () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => console.log(res))
  }
  
  render() {
    return (
      <div style = {{ backgroundColor: 'yellow' }}>
        <TodoAdd />
        <TodoList />
      </div>
    );
  }

}

export default TodoContainer;
