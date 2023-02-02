import {useEffect, useState} from "react";
import {commentsRequest} from "../../api/request/commentsRequest";
import {Comments} from "../../components/Comments/Comments";
import {Outlet} from "react-router-dom";

import './CommentsPage.css'

export const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsRequest.getAll().then(({data}) => setComments([...data]));
    }, [])
    return (
        <div className={'comments_page'}>
            <h1>Comments Page</h1>
            <hr/>
            <Comments comments={comments} />
            <hr/>
            <Outlet />
        </div>
    );
};