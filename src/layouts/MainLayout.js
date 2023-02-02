import {SideBar} from "../components/SideBar/SideBar";
import {Outlet} from "react-router-dom";

import './MainLayout.styles.css';


const MainLayout = () => {
    return (
        <div className={'container'}>
            <SideBar />
            <Outlet />
        </div>
    );
};

export {
    MainLayout
};