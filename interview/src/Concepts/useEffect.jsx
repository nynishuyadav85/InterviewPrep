import { useEffect, useState } from "react"

const Effect = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController;

        async function fetchUsers() {
            try {
                setLoading(true)
                setError('')
                const res = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await res.json()
                setUser(data)
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Something went wrong");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchUsers()

        return () => {
            controller.abort();
        };
    }, [])

    if (loading) return <p>Loading users...</p>;

    if (error) return <p role="alert">{error}</p>;


    return (
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default Effect