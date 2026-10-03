import { useState } from "react"

const Ctcb = () => {

    const [text, setText] = useState('')

    const copyHandler = async () => {
        if (!text.trim()) return

        try {
            await navigator.clipboard.writeText(text)
            console.log('text copied')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h4>Copy to clip board</h4>
            <p>Write anything and click on button to copy to clip board</p>
            <div>
                <label>Enter here: </label>
                <input type="text" value={text} placeholder="Type Something" onChange={(e) => setText(e.target.value)}></input>
                <button onClick={copyHandler}>Copy</button>
            </div>
        </div>
    )
}

export default Ctcb