import './Posts.css';

export const Posts = ({posts, onSelectPost}) => {
    return (
        <div>
            {posts.map((item) => {
                const {id, title} = item;
                return (
                    <div key={`${id}-item`}>
                        <div className={'blocks'}>
                        {id} --- {title}
                        </div>
                        <div className={'btnBlock'}>
                            <button className={'btn'} onClick={() => onSelectPost(id)}>More Info</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
