import { useState } from "react"

const Tabs = () => {
    const [tab, setTab] = useState("home")
    return (
        <div>
            <h1>Tab Switcher</h1>
            <div>
                <button onClick={() => setTab("home")}>Home</button>
                <button onClick={() => setTab("profile")} > Profile</button>
                <button onClick={() => setTab("setting")} >Setting</button>
            </div>
            <div>
                {tab === 'home' && <p>Home</p>}
                {tab === 'profile' && <p>profile</p>}
                {tab === 'setting' && <p>setting</p>}
            </div>
        </div >
    )
}

export default Tabs