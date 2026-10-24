import { useState } from "react"
import './style.css'

const BillCounterSystem = () => {
    const [input, setInput] = useState('')
    const [counters, setCounters] = useState([])
    const [updateUi, setUpdateUi] = useState(false)
    const [quantity, setQuantity] = useState('')


    function initializeCounters() {
        const count = parseInt(input);
        if (isNaN(count) || count <= 0) return;
        setCounters(Array.from({ length: count }, () => []))
        setUpdateUi(true)
    }

    function handleAdd() {
        const qty = parseInt(quantity)
        if (isNaN(qty) || qty <= 0) return;
        const totalItemPerCounter = counters.map((queue) => queue.reduce((sum, item) => sum + item, 0))
        // [1,2,3]
        // const counterIndex = totalItemPerCounter.findIndex((total) => total === 0)
        const minTotal = Math.min(...totalItemPerCounter)
        const counterIndex = totalItemPerCounter.findIndex((item) => item === minTotal)
        const updatedCounters = counters.map((queue, idx) => idx === counterIndex ? [...queue, qty] : queue)
        setCounters(updatedCounters)
        setQuantity('')

    }
    return (
        <div>
            <h1>
                Billing Counter System
            </h1>
            <div>
                <input type="number" value={updateUi ? quantity : input} onChange={(e) => updateUi ? setQuantity(e.target.value) : setInput(e.target.value)} placeholder={updateUi ? "Enter quantity" : "Number of counters"}></input>
                <button onClick={updateUi ? handleAdd : initializeCounters}>{updateUi ? "Add Customer" : "Set counters"}</button>
            </div>

            <div className="card-container">
                {counters.map((counter, index) => (
                    <div className="card">Counter{counter + " " + (index + 1)}
                        {counter.map((qty, idx) => (
                            <div key={idx} className="customer-box" data-testid="customer-box">
                                {qty}
                            </div>
                        ))}

                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default BillCounterSystem