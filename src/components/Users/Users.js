import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux/slices/userSlice";
import {User} from "../User/User";

export const Users = () => {
    const {users, errors, loading} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
    }, []);
    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading....................................</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};