
const PostCard = ({ data }) => {

    const { title, body, reactions, views } = data
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>👁️ {views}</p>
            {Object.entries(reactions).map(([type, count]) => (
                <p>{type === 'likes' ? "👍" : "👎"} : {count}</p>
            ))}
        </div>
    )
}

export default PostCard