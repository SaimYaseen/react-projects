import { useState } from "react";
import React from 'react';
import icon from './images/icon.png';
import unchecked from './images/unchecked.png';

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        const newTodoItem = {
            id: Math.random().toString(36).substring(2, 15), // Generate a unique ID
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const handleDeleteTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    const handleToggleComplete = (todoId) => {
        setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)));
        document.getElementById('1').classList.toggle('taskTextChecked')
    };

    return (
        <>
            <div className="main">
                <div className="toDo mt-2">
                    <h2 className="px-2">To-Do List <img src={icon} alt="" /></h2>
                    <div className="mb-3 todoInputfield">
                        <input
                            type="text"
                            className=""
                            id="todoInput"
                            placeholder="Add a task"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                        <button className="addButton bg-primary" onClick={handleAddTodo}>Add</button>
                    </div>
                    {todos.length === 0 ? (
                        <p>No tasks yet!</p>
                    ) : (
                        todos.map((todo) => (
                            <div className="custom-radio my-2 mx-2" key={todo.id}>
                                <input
                                    type="radio"
                                    id={`option-${todo.id}`}
                                    name="radioGroup"
                                    value={todo.id}

                                /><span className="spacBetween">
                                <label
                                id="1"
                                className="taskText taskTextChecked"
                                    htmlFor={`option-${todo.id}`}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                    onClick={() => handleToggleComplete(todo.id)}
                                >
                                    {todo.text}
                                </label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg cancleIcon" viewBox="0 0 16 16" onClick={() => handleDeleteTodo(todo.id)}>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                                </span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
