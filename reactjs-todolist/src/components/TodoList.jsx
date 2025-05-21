import React from 'react';

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and veg',
        'Pick up the kids from school'
    ];

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <li className='todoItem' key={todoIndex}>
                    {todo}
                    <i class="fa-solid fa-pen-to-square"></i>
                    </li>
            ))}
        </ul>
    );
}
