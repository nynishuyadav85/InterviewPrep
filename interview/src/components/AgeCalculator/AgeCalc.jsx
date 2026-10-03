import { useState } from "react"

const AgeCalc = () => {

    const [date, setDate] = useState('')
    const [age, setAge] = useState(null)

    function calculateDate() {
        const today = new Date();
        const birth = new Date(age)

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let day = today.getDay() - birth.getDay()
        setAge({ years, months, day })
    }

    return (
        <div>

            <h3>Age Calculator</h3>
            <div>
                <label>Enter/Select a birthdate:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <button onClick={calculateDate}>Calculate Age</button>
                {age && <span>{` ${age.years} years ,  ${age.months} months,  ${age.days} days`}</span>}
            </div>


        </div>
    )
}

export default AgeCalc