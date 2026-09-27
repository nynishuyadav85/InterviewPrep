// import { useState } from "react"

const CharacterCount = () => {
    // const [maxLength, setMaxLength] = useState('');
    const maxLength = 10;

    return (
        <div className="text-align-center">
            <h1>
                CharacterCount
            </h1>
            <p>Track your input length with live character warnings.</p>
            <label>Max length: </label>
            <input type="number" min={1} max={10}></input>

            <div className="m-4">
                <textarea placeholder="Start Typing"></textarea>
            </div>

            <span>0/{maxLength}</span>
        </div>
    )
}

export default CharacterCount