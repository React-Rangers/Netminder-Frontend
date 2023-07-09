import React, { useState } from 'react';

const Reminders = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <div className="add-todo">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todos">
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reminders;
