import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Todo list</p>
                <TodoList />
            </header>
        </div>
    );
}

export default App;
