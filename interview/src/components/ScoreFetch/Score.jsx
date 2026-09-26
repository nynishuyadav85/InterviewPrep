/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { scoreApi } from "./api"

const Score = () => {

    const [score, setScore] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await scoreApi()
                const players = JSON.stringify(resp)
                console.log(resp)
                setScore(resp.data)
            } catch (error) {
                console.log('Error', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div>

            <h1>
                Data
            </h1>

            return <div>Score: {score}</div>;
        </div>
    )
}

export default Score