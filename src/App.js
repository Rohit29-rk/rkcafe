import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Admin from './Component/Admin';
import Home from './Component/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <><Router>
      <Navbar/>
      <Routes>
          <Route>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/admin" element={<Admin/>} />
          </Route>
      </Routes>
      <Footer/>
    </Router>
       
    </>
  );
}

export default App;
