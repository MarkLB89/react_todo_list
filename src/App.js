import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <p>Markeis Week 3 GP</p>
                <p>Todo list</p>
                <TodoList />
            </header>
        </div>
    );
}

export default App;
