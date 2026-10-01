import { Menu } from "lucide-react"
import { useState } from "react"
import "./style.css"

const SideBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={`sidebar ${toggle ? "open" : "closed"}`}>
            <button className="toggle-btn" type="button" onClick={() => setToggle(!toggle)}><Menu /></button>
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