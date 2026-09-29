import { useState } from "react"

const CharacterCount = () => {
    const [maxLength, setMaxLength] = useState(null);
    const [text, setText] = useState("")

    return (
        <div className="text-align-center">
            <h1>
                CharacterCount
            </h1>
            <p>Track your input length with live character warnings.</p>
            <label>Max length: </label>
            <input
                type="number"
                min={0}
                value={maxLength}
                onChange={(e) => setMaxLength(e.target.value)}
            >
            </input>

            <div className="m-4">
                <textarea
                    placeholder="Start Typing"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                >
                </textarea>
            </div>

            <span>{text.length}/{maxLength}</span>

            <div>
                <p>{maxLength - text.length === 1 ? "You are close to the limit" : text.length > maxLength ? `limt exceed by ${text.length - maxLength} character` : " "}</p>
            </div>
        </div>
    )
}

export default CharacterCount