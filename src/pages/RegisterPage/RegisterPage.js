import {useForm} from "react-hook-form";

import '../LoginPage/LoginPage.css'

import {userService} from "../../services/userService";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const RegisterPage = () => {
    
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await userService.create(user)
            navigate('/login')
        }catch (e) {
            setError(e.response.data)
        }
    };

    return (
        <div className={'box'}>
            <div>
                <form className={'form'} onSubmit={handleSubmit(registerUser)}>
                    <h2>Register</h2>
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
                    <div className={'input_box'}>
                        <input type="text" required="required" {...register('email')}/>
                        <span>Email</span>
                        <i></i>
                    </div>
                    <button className={'btn'}>Register</button>
                </form>
            </div>
            {error&&
                <div>
                    {JSON.stringify(error)}
                </div>
            }
        </div>
    );
};