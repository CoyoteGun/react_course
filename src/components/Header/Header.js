import css from './Header.module.css';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <div className={css.link}>
                    <Link to={'/login'}>Login</Link>
                </div>
                <div className={css.link}>
                    <Link to={'/register'}>Register</Link>
                </div>
            </div>
        </div>
    );
};