// 1. 𝗧𝗵𝗲 𝗖𝗹𝗮𝘀𝘀𝗶𝗰 𝗖𝗼𝘂𝗻𝘁𝗲𝗿 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁:
// - They always start with this. 
// - Build a counter that increments, decrements, and resets.
// - Sounds simple right ? But then they ask you to optimize re - renders and
//  handle edge cases.
// - The trick is using useCallback and thinking about state updates.

import { useState } from "react"



const Counters = () => {

    const [count, setCount] = useState(0)

    // function handleClick() {
    //     console.log("Clicked")
    //     setCount(count + 1)
    // }
    return (
        <div>
            <h1>Counters</h1>
            <div>
                <button onClick={() => setCount(prev => prev + 1)}>Increment+</button>
            </div>
            <div>
                <button onClick={() => setCount(prev => Math.max(0, prev - 1))}>Decerement-</button>
            </div>
            <div>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            <span>{count}</span>

        </div>
    )
}

export default Counters