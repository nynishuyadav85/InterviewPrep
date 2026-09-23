/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    })

    function topHandle() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // if (!isVisible) return null;
    return (
        <div>
            <h1>Back to top</h1>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>
            <p>This is Para</p>

            <button onClick={topHandle} style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                padding: '12px 16px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1000,
            }}>Back to top</button>

        </div>
    )
}

export default BackToTop