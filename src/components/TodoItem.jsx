import React from 'react';

const TodoItem = ({ value, deleteTodo }) => {
    return (
        <li>
            {value}
            <button onClick={() => deleteTodo(value)}>Remove</button>
        </li>
    );
};

export default TodoItem;
