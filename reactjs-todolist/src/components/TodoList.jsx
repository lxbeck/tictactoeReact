import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and veg',
        'Pick up the kids from school'
    ];

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <TodoCard key={todoIndex} todoText={todo} />
            ))}
        </ul>
    );
}
