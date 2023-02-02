import { useNavigate } from "react-router-dom";

import './Comments.css'

export const Comments = ({comments = []}) => {

    const navigate = useNavigate();

    return (
        <div className={'comment_block'}>

            {comments.map(item => {
                const {postId, id, name} = item;

                return (
                    <div key={id} className={'comment_content'}>
                        <div>ID: {id}</div>
                        <div>PostID: {postId}</div>
                        <div>Comment Name: {name}</div>
                        <button onClick={() => navigate(postId.toString())}>Get Post</button>
                    </div>
                )
            })}
        </div>
    );
};