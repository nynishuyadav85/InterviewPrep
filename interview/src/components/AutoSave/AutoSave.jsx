import { useEffect, useState } from "react"

const AutoSave = () => {
    const [text, setText] = useState(() => {
        return localStorage.getItem("savedInputKey") || "";
    });

    useEffect(() => {
        localStorage.setItem("savedInputKey", text);
    }, [text]);

    function clearText() {
        setText("");
    }

    return (
        <div>
            <h3>Auto Save</h3>
            <label>Name: </label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={clearText}>Clear</button>
        </div>
    );
};

export default AutoSave