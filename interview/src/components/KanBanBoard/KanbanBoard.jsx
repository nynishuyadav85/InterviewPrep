import { useState } from 'react'
import './kstyle.css'

const columns = ["Todo", "In Progress", "Completed"];

const KanbanBoard = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const [editingId, setEditingId] = useState(null)
    const [editingTitle, setEditingTitle] = useState("")


    const addTaskHandle = () => {
        if (!newTask.trim()) return;
        const task = {
            id: Date.now(),
            title: newTask.trim(),
            status: "Todo"
        }
        setTasks([...tasks, task])
        setNewTask("")
    }

    const moveCard = (id, direction) => {
        setTasks((prev) => prev.map((task) => {
            if (task.id === id) {
                const currentIndex = columns.indexOf(task.status)
                const newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1
                return { ...task, status: columns[newIndex] }
            }
            return task
        }))
    }

    const saveTitle = (id) => {
        if (!editingTitle.trim()) return;
        setTasks((prev) => prev.map((task) => task.id === id ? { ...task, title: editingTitle.trim() } : task))
        setEditingId(null);
        setEditingTitle("")
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    return (
        <div>
            <h2>Kanban Board</h2>

            <div>
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter Task"></input>
                <button onClick={addTaskHandle}>Add Task</button>
            </div>

            <div className="kanban-board">
                {columns.map((col) => (
                    <div key={col} className='column'>
                        <h3>{col}</h3>
                        {tasks.filter((task) => task.status === col).map((task) => (
                            <div key={task.id} className='task-card'>
                                {editingId === task.id ? (<input autoFocus value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} onBlur={() => saveTitle(task.id)} onKeyDown={(e) => e.key === "Enter" && saveTitle(task.id)} />) : (<p>{task.title}</p>)}
                                <div className='task-buttons'>
                                    {col !== "Todo" && (<button className='shiftBtn' onClick={() => moveCard(task.id, "left")}>⬅</button>)}
                                    {col !== "Completed" && (<button onClick={() => moveCard(task.id, "right")} className='shiftBtn'>→</button>)}
                                    <button className='editBtn' onClick={() => { setEditingId(task.id); setEditingTitle(task.title) }}>Edit</button>
                                    <button className='deleteBtn' onClick={() => deleteTask(task.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default KanbanBoard