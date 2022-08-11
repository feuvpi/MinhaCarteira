import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import User from './pages/User.jsx';
import FormAuth from './components/FormAuth'
import FormRegister from './components/FormRegister.jsx';
import Axios from "axios"
import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {


    const [user, setUser] = useState(null);

    const logout = () => {};

    const login = (email, password) => {
        Axios.post("http://localhost:3000/auth/authenticate", {
        email: email,
        password: password,
      }).then((response) => {
        if(!response.data.message){
        } else {
          console.log("this " + response.data.message);
        }
      });
      }

    return(

    <AuthContext.Provider value={{authenticated: user, user, login}}>
        <Router>
            <Routes>
                <Route path="/" element={<FormAuth/>}/>
                <Route path="/register" element={<FormRegister/>}/>
                <Route path="/home" element={<User/>}/>
            </Routes>
        </Router>
    </AuthContext.Provider>
       
    );
}

export default AppRoutes;