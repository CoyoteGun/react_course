
import './App.css';

import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AuthRequiredLayout} from "./layouts/AuthRequiredLayout";
import {CarsPage} from "./pages/CarsPage/CarsPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";

const App = () => {
    return(
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequiredLayout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                
            </Route>
        </Routes>
    )
};

export {App};
