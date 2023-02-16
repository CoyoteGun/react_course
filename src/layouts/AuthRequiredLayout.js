import {Outlet} from "react-router-dom";

import css from './LayoutStyle.module.css';

export const AuthRequiredLayout = () => {
    return (
        <div className={css.container}>
            <div>
                <h1 className={css.title}>Create Your Own Car</h1>
            </div>
            <Outlet/>
        </div>
    );
};