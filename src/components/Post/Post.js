export const Post = ({post}) => {
    const {id, userId, title} = post;
    return (
        <div>
            <div>{id} - {userId}</div>
            <div>{title}</div>
        </div>
    );
};