import {useEffect, useState} from "react";

import './PostDetails.css';

import {getPost} from "../api/getPosts";

export const PostDetails = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId){
            getPost(postId).then(resp => setPost(resp));
        }
    },[postId]);
    if (!post) return null;
    return (
        <div>
            <h1 className={'header'}>PostDetails</h1>
            <div className={'block'}>
                <h2 className={'title'}>{post.id}, {post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
};
