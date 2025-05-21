import React from 'react';

export default function TodoCard({ todoText, index, handleDeleteTodo }) { 
  return (
    <li className='todoItem'>
        <span>{todoText}</span>
        <div className='actionsContainer'>
          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeleteTodo(index)}>  {}
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
    </li>
  );
}
