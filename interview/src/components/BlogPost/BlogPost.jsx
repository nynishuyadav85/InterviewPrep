import PostCard from "./PostCard"
import postData from "./postData"

const BlogPost = () => {
    return (
        <div>
            <h3>Blog Post</h3>
            {postData.map((post) => (
                <PostCard key={post.id} data={post} />
            ))}
        </div>
    )
}

export default BlogPost