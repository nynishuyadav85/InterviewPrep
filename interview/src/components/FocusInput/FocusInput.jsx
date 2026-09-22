import { useRef } from "react"

const FocusInput = () => {

    const inputRef = useRef(null)

    const focusHandler = () => {
        inputRef.current.focus()
    }
    return (
        <div>

            <h1>FocusInput</h1>

            <input placeholder="Type here" type="text" ref={inputRef}></input>
            <button onClick={focusHandler}> Focus Input</button>
        </div>
    )
}

export default FocusInput