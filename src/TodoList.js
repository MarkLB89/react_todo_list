import React, { useState } from 'react';

function TodoList() {
    // Initialize state variables
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editTodo, setEditTodo] = useState(false);
    const [editIndex, setEditTodoIndex] = useState(null);

    // Handle input change
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    // Handle edit
    function handleEdit(index) {
        setInputValue(todos[index]);
        setEditTodo(true);
        setEditTodoIndex(index);
    }

    // Handle delete
    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    // Handle submit
    function handleSubmit() {
        if (inputValue.trim()) {
            if (editTodo) {
                const updatedTodos = todos.map((todo, index) =>
                    index === editIndex ? inputValue.trim() : todo
                );
                setTodos(updatedTodos);
                setEditTodo(false);
                setEditTodoIndex(null);
            } else {
                setTodos([...todos, inputValue.trim()]);
            }
            setInputValue('');
        }
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>{editTodo ? 'Update' : 'Add Todo'}</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
