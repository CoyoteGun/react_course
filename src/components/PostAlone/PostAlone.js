import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "../Post/Post";

const PostAlone = () => {

    let [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(24)
            .then(value => value.data)
            .then(value => setPost(value))
    }, [])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {
    PostAlone
};