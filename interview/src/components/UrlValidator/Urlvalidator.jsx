/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"

const Urlvalidator = () => {
    const [url, setUrl] = useState('')
    const [valid, setValid] = useState(null)


    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

    useEffect(() => {

        if (url === "") {
            setValid(null)
            return
        }
        if (urlRegex.test(url)) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [url])

    return (
        <div>
            <h1>Url Validator</h1>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}></input>
            {valid ? "Valid" : "Invalid"}
        </div>
    )
}

export default Urlvalidator