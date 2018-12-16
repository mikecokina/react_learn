import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {
  state = {
    todos: [
        {uid: 1, content: 'play guitar'},
        {uid: 2, content: 'learn react'}
    ]
  };

  deleteTodo = (uid) => {
      const todos = this.state.todos.filter(
          todo => {
              return todo.uid !== uid
          }
      );

      this.setState({
          todos: todos
      })
  };

  addTodo = (todo) => {
      todo.uid = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
          todos: todos
      })
  };



  render() {
    return (
      <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
            />
            <AddForm
                addTodo={this.addTodo}
            />

      </div>
    );
  }
}

export default App;
