import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {  
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <TodoCard 
                    key={todoIndex} 
                    index={todoIndex} 
                    todoText={todo} 
                    handleDeleteTodo={handleDeleteTodo}  
                    handleEditTodo={handleEditTodo}
                />
            ))}
        </ul>
    );
}
