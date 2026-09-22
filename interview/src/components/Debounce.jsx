import { useState } from "react"

const Debounce = () => {

    const [text, setText] = useState("")


    return (
        <div>
            <h1>Debouncdddde</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
    )
}

export default Debounce