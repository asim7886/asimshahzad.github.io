import React ,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home.js';
import Contact from './Contact';
import Error from './Error';


function App() {

  



  

  return (
  
      <Routes>
        <Route path="/" element={<Home   />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
 

  );
}

export default App;
