import './Todos.css'

export const TodosList = ({todosList = []}) => {
    return (
        <div className={'todos_block'}>
            {todosList.map(item => (
                <div key={item.id} className={'todos_content'}>
                    <div>UserId: {item.userId}</div>
                    <div>ID: {item.id}</div>
                    <div>Title: {item.title}</div>
                    <div>Status: {item.completed ? 'Completed' : 'Not done yet'}</div>
                </div>
            ))}
        </div>
    );
};