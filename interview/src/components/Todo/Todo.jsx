// 𝗧𝗼𝗱𝗼 𝗟𝗶𝘀𝘁 𝘄𝗶𝘁𝗵 𝗟𝗼𝗰𝗮𝗹 𝗦𝘁𝗼𝗿𝗮𝗴𝗲:
// - This one tests your understanding of useEffect and data persistence.
// - They want to see if you know when to sync with localStorage and how to
//  handle component cleanup.
// - Most people forget to handle the case when localStorage is disabled.

import { useState } from "react"


const Todo = () => {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState("")


    const addTodoHandler = () => {
        setTodo(text)
        setText("")
    }

    return (
        <div>
            <h1>Todo</h1>

            <ol>
                <li>{todo}</li>

            </ol>

            <div>
                <label>Add Todo</label>
                <input placeholder="Todo" type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div>
                <button onClick={addTodoHandler}>Add</button>
            </div>
            <div>
                <button onClick={() => setTodo('')}>Delete</button>
            </div>
        </div>
    )
}

export default Todo