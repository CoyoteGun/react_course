import {NavLink} from "react-router-dom";

import './SideBar.styles.css'


const SideBar = () => {
    return (
        <div className={'side_bar'}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export {
    SideBar
};