import { useState } from "react"

const FieldValidation = () => {



    const [formData, setFormData] = useState({ name: "", location: "" });
    const [valid, setValid] = useState(false)
    const [nameRequired, setNameRequired] = useState(false)
    const [locationRequired, setLocationRequired] = useState(false)

    function submitHandler() {
        if (formData.name === "") {
            setNameRequired(true)
        }
        if (formData.location === "") {
            setLocationRequired(true)
        }
        setValid(true)
    }

    return (
        <div>
            <h2>Asterisk Field Validation</h2>
            <div>
                <label>Name</label>
                <input value={formData.name} onChange={(e) => setFormData(e.target.value)}></input>
                {nameRequired && <span style={{ color: "red" }}>Enter name</span>}

                <label>Location</label>
                <input value={setFormData.location} onChange={(e) => setFormData(e.target.value)}></input>
                {locationRequired && <span style={{ color: "red" }}>Enter Location</span>}

                <button onClick={submitHandler} >Submit</button>
                {/* </form> */}
                {valid && <p>Submitted Name : {name} Location : {location}</p>}
            </div>
        </div>
    )
}

export default FieldValidation