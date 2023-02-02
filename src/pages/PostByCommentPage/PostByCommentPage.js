import './PostByCommentPage.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsRequest} from "../../api/request/postsRequest";
import {RouterEndpoints} from "../../routes/routes";

export const PostByCommentPage = () => {
    const {postId} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (postId) {
            postsRequest.getPostById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])
    if (!post) return null;
    return (
        <div className={'post_b_comm_page'}>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
            <div></div>
            <button onClick={() => navigate(`/${RouterEndpoints.comments}`)}>{'<'}Back</button>
        </div>
    );
};