import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    function persistData(newList) {
        localStorage.setItem("todos", JSON.stringify(newList));
    }

    const handleAddTodos = (newTodo) => {
        if (newTodo.trim() !== "") {
            const newTodoList = [...todos, newTodo];
            setTodos(newTodoList);
            persistData(newTodoList);
        }
    };

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodoList);
        persistData(newTodoList);
    }

    function handleEditTodo(index){
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);  
        handleDeleteTodo(index);  
    }

    useEffect(() => {
        let localTodos = localStorage.getItem("todos");
        if (localTodos) {
            setTodos(JSON.parse(localTodos));
        }
    }, []);

    return (
        <>
            <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
            <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </>
    );
}

export default App;
