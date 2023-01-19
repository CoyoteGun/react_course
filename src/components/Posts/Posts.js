import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";

const Posts = () => {

    let [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(()=>{
       postService.getAll()
            .then(value => value.data)
            .then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h2>PostDetails:</h2>
            {postDetails && <Post post={postDetails}/>}

            <hr/>

            <h2>Posts:</h2>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {
    Posts
};