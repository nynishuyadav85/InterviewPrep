import { useState } from "react"

const ReadMore = () => {

    const text = `React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components that efficiently update and render as data changes. One of React’s key features is the virtual DOM, which improves performance by minimizing direct manipulation of the actual DOM.`

    const [toggle, setToggle] = useState(false);


    return (
        <div>
            <h2>Read More Toggle</h2>
            <p>{!toggle ? `${text.substring(0, 100)}...` : text}</p>
            <button onClick={() => setToggle(!toggle)}>{!toggle ? "Read More" : "Read Less"}</button>
        </div>
    )
}

export default ReadMore