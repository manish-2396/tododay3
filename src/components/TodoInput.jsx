import React from 'react'
import { useState } from "react";


const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text"  placeholder="New Todo Item" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => {addTodo(value);}} >add</button>
    </div>
  )
}

export default TodoInput;
