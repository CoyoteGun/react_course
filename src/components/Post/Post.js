import './Post.css';

const Post = ({post, setPostDetails}) => {
    const {id, title, body} = post;

    return (
        <div>
            <div className={'blocks'}>
                <h2>{id}, {title}</h2>
                <p>{body}</p>
                <button className={'btn'} onClick={() => setPostDetails(post)}>Show Post</button>
            </div>
        </div>
    );
};

export {
    Post
};