import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices/userSlice";

export const User = ({user}) => {
    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>{id}. {name}, {username}</div>
            <button onClick={() => dispatch(userActions.showSelectedUser(user))}>Show it Up</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>apiSelect</button>
        </div>
    );
};