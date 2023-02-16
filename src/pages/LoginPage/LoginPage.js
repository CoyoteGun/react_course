import {useForm} from "react-hook-form";

import './LoginPage.css';

import {authService} from "../../services/authService";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {

    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

   const login = async (userCredential) => {
       try {
           await authService.login(userCredential);
           navigate('/cars')
       }catch (e) {
           if(e.response.status === 401) {
               setError(e.response.data)
           }
       }
    };

    return (
        <div className={'container'}>
        <div className={'box'}>
            <div>
                <form className={'form'} onSubmit={handleSubmit(login)}>
                    <h2>Sign in</h2>
                    <div className={'input_box'}>
                        <input type="text" required="required" {...register('username')}/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className={'input_box'}>
                        <input type="password" required="required" {...register('password')}/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className={'links'}>
                        <a href={'#'}>Forgot Password</a>
                        <a href={'#'}>Sign Up</a>
                    </div>
                        <button className={'btn'}>Login</button>
                </form>
            </div>
            {error?.detail &&
                <div>
                    {error.detail}
                </div>
            }
        </div>
        </div>
    );
};