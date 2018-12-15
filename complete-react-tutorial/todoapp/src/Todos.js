import React from 'react'


const Todos = ({todos, deleteTodo}) => {
    const spanStyle = {
        cursor: 'pointer'
    };

    const todosList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.uid}>
                <span style={spanStyle} onClick={() => deleteTodo(todo.uid)}>{todo.content}</span>
                </div>
            )
        })
        ) : (
        <p className="center">You have no todo's left!</p>
    );


  return(
      <div className="todos collection">
          {todosList}
      </div>
  );
};


export default Todos
