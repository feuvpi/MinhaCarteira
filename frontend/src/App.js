import React, { useState } from 'react';
import { Router, Route, Routes } from "react-router-dom";
// PAGES
import FormAuth from './components/FormAuth'
import User from './pages/User.jsx';
import FormRegister from './components/FormRegister.jsx';
import { AuthContext } from "./contexts/auth";
import Axios from "axios"


function App() {

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

  const [user, setUser] = useState(null);


  const logout = () => {};

  return (

    <>
    <Router>
    <AuthContext.Provider value={{authenticated: !!user, user, login}}>
    <Routes>
      <Route path="/" element={<FormAuth/>}/>
      <Route path="/register" element={<FormRegister/>}/>
      <Route path="/home" element={<User/>}/>
    </Routes>
    </AuthContext.Provider>
    </Router>
   
    
  
    </>
    

  );
}

export default App;



/*
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About'
import Support from './components/Support'
import AllInOne from './components/AllInOne'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Support />
    <AllInOne />
    <Pricing />
    <Footer/>
    </>
  );
}

export default App;
*/

