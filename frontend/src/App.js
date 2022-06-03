import React from 'react';
import { Route, Routes } from "react-router-dom";
// PAGES
import Navbar from './components/Navbar.jsx'
import FormAuth from './components/FormAuth'
import Footer from './components/Footer'
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import FormRegister from './components/FormRegister.jsx';


function App() {
  return (

    <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<FormAuth/>}/>
      <Route path="/register" element={<FormRegister/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  
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

