import {useSelector} from "react-redux";

export const Header = () => {

    const {showUser} = useSelector(state => state.users);

    return (
        <div>
            {showUser && showUser.name}
        </div>
    );
};