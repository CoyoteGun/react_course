import './Albums.css';

export const Albums = ({albums = []}) => {
    return (
        <div className={'block'}>
            {albums.map(item => {
                const {id, title, userId} = item;
                return (
                    <div key={id} className={'block_content'}>
                        <div>ID: {id}</div>
                        <div>UserID: {userId}</div>
                        <div>Title: {title}</div>
                    </div>
                )
            })}
        </div>
    );
};