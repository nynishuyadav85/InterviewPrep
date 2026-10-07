import { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
    const [input, setInput] = useState('');
    // Added timeSpent and isRunning to each todo object
    const [todos, setTodos] = useState([]);

    // This single interval updates ALL running todos safely every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.isRunning ? { ...todo, timeSpent: todo.timeSpent + 1 } : todo
                )
            );
        }, 1000);

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const addTodoHandler = () => {
        if (input.trim() === '') return;
        setTodos(prev => [...prev, {
            id: Date.now(),
            text: input,
            timeSpent: 0,      // Track time per todo
            isRunning: false   // Track if this specific todo's timer is active
        }]);
        setInput('');
    };

    // ✅ FIX 1: Delete only the specific todo
    const deleteHandler = (idToDelete) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== idToDelete));
    };

    // ✅ FIX 2: Toggle timer for a specific todo
    const toggleTimer = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isRunning: !todo.isRunning } : todo
        ));
    };

    // ✅ FIX 3: Reset timer for a specific todo
    const resetTimer = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isRunning: false, timeSpent: 0 } : todo
        ));
    };

    return (
        <main className="todo-app">
            <p className="todo-eyebrow">YOUR DAY, ORGANIZED</p>
            <h1 className="todo-title">Todo with Timer</h1>
            <p className="todo-description">
                Add a task and make time for what matters.
            </p>

            <div className="todo-form">
                <input
                    className="todo-input"
                    value={input}
                    placeholder="What needs to get done?"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodoHandler()}
                />
                <button className="todo-button todo-button-add" onClick={addTodoHandler}>
                    Add task
                </button>
            </div>

            {todos.length > 0 ? (
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li className="todo-item" key={todo.id}>
                            <span>{todo.text}</span>
                            <div className="todo-actions">
                                <button
                                    className={`todo-button todo-button-start ${todo.isRunning ? 'active' : ''}`}
                                    onClick={() => toggleTimer(todo.id)}
                                >
                                    {todo.isRunning ? 'Pause' : 'Start'}
                                </button>

                                <button
                                    className="todo-button todo-button-reset"
                                    onClick={() => resetTimer(todo.id)}
                                >
                                    Reset
                                </button>

                                <button
                                    className="todo-button todo-button-delete"
                                    onClick={() => deleteHandler(todo.id)}
                                >
                                    Delete
                                </button>

                                <div className="todo-timer">
                                    <span className="todo-timer-label">Timer:</span>
                                    <span className="todo-timer-value">{todo.timeSpent}s</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="todo-empty">No tasks yet. Add one above to get started.</p>
            )}
        </main>
    );
};

export default TodoList;