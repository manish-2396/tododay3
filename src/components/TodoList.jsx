import React from 'react'

const TodoList = ({children }) => {
  return (
    <div>
      <h1>Todo list here</h1>
      <ul>{children}</ul>
    </div>

  );
};

export default TodoList;
