import React from 'react';

export default function TodoCard({ todoText, index, handleDeleteTodo, handleEditTodo }) {
  return (
    <li className='todoItem'>
        <span>{todoText}</span>
        <div className='actionsContainer'>
          <button onClick={() => handleEditTodo(index)}>  {}
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeleteTodo(index)}>  
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
    </li>
  );
}
