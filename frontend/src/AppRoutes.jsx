import React, { useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Operations from './pages/Operations.jsx';
import Assets from './pages/Assets.jsx';
import FormAuth from './components/FormAuth'
import FormRegister from './components/FormRegister.jsx';
import Axios from "axios"
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {


    const Private = ({children}) => {
        const { authenticated } = useContext(AuthContext);
        if(!authenticated){
            return <Navigate to='/'/>;
        }

        return children;
    }

    return(

    <AuthProvider>
            <Routes>
                <Route path="/" element={<FormAuth/>}/>
                <Route path="/register" element={<FormRegister/>}/>
                <Route path="/operations" element={<Private><Operations/></Private>}/>
                <Route path="/assets" element={<Private><Assets/></Private>}/>
            </Routes>
    </AuthProvider>
       
    );
}

export default AppRoutes;