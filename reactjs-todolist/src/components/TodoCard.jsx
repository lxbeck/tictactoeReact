import React from 'react';

export default function TodoCard({ todoText }) {
  return (
    <li className='todoItem'>
        <span>{todoText}</span> {}
        <div className='actionsContainer'>
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    </li>
  );
}
