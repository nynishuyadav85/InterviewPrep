import fetchUserData from "../api"
import { useState } from "react"

const UserData = () => {
    const [userData, setUserData] = useState(null)

    async function dataHandle() {
        const res = await fetchUserData()
        setUserData(res)
    }

    return (
        <div>
            <button onClick={dataHandle}>GET DATA</button>
            {userData && <h1>{userData.name} </h1>}
            {userData && <h2>{userData.bio}</h2>}
        </div>
    )
}

export default UserData