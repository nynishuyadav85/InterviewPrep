

// https://jsonplaceholder.typicode.com/posts/1

import { useQuery } from "@tanstack/react-query"

const TanStackQuery = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        }
    })

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong</p>;

    return (
        <div>
            {/* 2. 'data' is a single object, not an array. Access properties directly. */}
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}

export default TanStackQuery