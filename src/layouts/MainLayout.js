import {Outlet} from "react-router-dom";

import css from './LayoutStyle.module.css';

export const MainLayout = () => {
    return (
        <div className={css.Main_Layout}>
            <Outlet/>
        </div>
    );
};