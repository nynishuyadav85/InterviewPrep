import { useState } from "react"

const ZigZagString = () => {
    const [text, setText] = useState('')
    const [result, setResult] = useState('')

    const convertHandler = () => {
        if (!text.trim('')) return;
        const arr = text.split(',').map((s) => s.trim())
        setResult(arr.map((str, i) => (i % 2 === 0 ? str : str.split('').reverse().join(''))))
    }
    return (
        <div>
            <h3>Array to Zigzag String</h3>
            <input value={text} placeholder="Type like: one,two,three" onChange={(e) => setText(e.target.value)}></input>
            <button onClick={convertHandler}>Convert</button>
            <span>{result}</span>
        </div >
    )
}

export default ZigZagString