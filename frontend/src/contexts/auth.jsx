import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// -- export AuthContext
export const AuthContext = createContext();


// -- export AuthProvider
export const AuthProvider = ({ children }) => {

    //- useNavigate
    const navigate = useNavigate();

    // -- user state
    const [user, setUser] = useState(null);

    // -- logout handle
    const logout = () => {
        setUser(null)
        console.log("logged out!")
        navigate('/')
    };

    // -- login handle
    const login = (email, password) => {
        Axios.post("http://localhost:3000/auth/authenticate", {
        email: email,
        password: password,
      }).then((response) => {
        //console.log(response)
        if(!response.data.user){
            console.log("erro ao realizar requisição")
        } else {
            setUser(response.data.user)
            navigate('/operations');
          console.log(response.data.token);
        }
      });
      }

      return(
        <AuthContext.Provider
         value={{authenticated: !!user, user, login, logout}}>
            {children}
         </AuthContext.Provider>
      )


}


