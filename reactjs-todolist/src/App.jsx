import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
        
    ]);

    const handleAddTodos = (newTodo) => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
        }
    };

    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
      })
      setTodos(newTodoList)
    }

    function handleEditTodo(index){

    }

    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos} />  {}
            <TodoList handleDeleteTodo={handleDeleteTodo}  todos={todos} />
        </>
    );
}

export default App;
