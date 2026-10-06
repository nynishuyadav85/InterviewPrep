import { useState } from "react"
import "./TodoList.css"

const TodoList = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [timer, setTimer] = useState(0)
    const [timeInterval, setTimeInterval] = useState(null)

    const addTodoHandler = () => {
        if (input.trim() === '') return;
        setTodos([...todos, { id: Date.now(), text: input }]);
        setInput('')
    }
    const deleteHandler = () => {
        setTodos([])
    }

    const startTimer = () => {
        setTimeInterval(setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000))
    }

    const resetTimer = () => {
        setTimer(0)
        clearInterval(timeInterval)
    }

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
                            {todo.text}
                            <div className="todo-actions">
                                <button className="todo-button todo-button-start" onClick={startTimer}>Start</button>
                                <button className="todo-button todo-button-reset" onClick={resetTimer}>Reset</button>
                                <button className="todo-button todo-button-delete" onClick={deleteHandler}>
                                    Delete
                                </button>
                                <div className="todo-timer">
                                    <span className="todo-timer-label">Timer</span>
                                    <span className="todo-timer-value">{timer}s</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="todo-empty">No tasks yet. Add one above to get started.</p>
            )}
        </main>
    )
}

export default TodoList