const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div>
            <div>{id}. {name} : '{username}'</div>
        </div>
    );
};

export {
    User
};