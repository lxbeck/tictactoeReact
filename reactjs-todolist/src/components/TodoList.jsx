import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleDeleteTodo }) {
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <TodoCard 
                    key={todoIndex} 
                    index={todoIndex} 
                    todoText={todo} 
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </ul>
    );
}
