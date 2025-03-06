import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import Services from './Components/Help/services';
import About from './Components/About/about';
import Sustainability from './Components/Sustainability/sustainability';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AutoPlay from './Components/Equipment/equipment';
import LoginForm from './Components/Login/login';
import SignupForm from './Components/Login/signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <div>
          <BrowserRouter>
            <Navbar />

            <Routes>
            <Route path="/" element={<Hero />}/>
            <Route path="/Products" element={<AutoPlay />}/>
            <Route path="/Services" element={<Services />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/sustainability" element={<Sustainability />}/> 
            <Route path="/login" element={<LoginForm />}/> 
            <Route path="/signup" element={<SignupForm />}/>

            </Routes>
  
            </BrowserRouter>
        </div>
    );
};

export default App;