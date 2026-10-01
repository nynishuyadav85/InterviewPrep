import { useState } from "react"

const SideBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <h3>
                SideBar
            </h3>
            <button type="button" onClick={() => setToggle(!toggle)}>Menu {toggle ? "-" : "+"}</button>
            {toggle && <div>
                <li>Home</li>
                <li>Dashboard</li>
                <li>About</li>
                <li>Contact Us</li>
            </div>}
        </div>
    )
}

export default SideBar