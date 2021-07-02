import { useState } from "react"
import Navbar from './Navbar/Navbar';
import Info from './Info/info'
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './Register/Register';
import Login from "./Login/Login";

function App() {

  const [appState, setAppState] = useState({})


  return (
    <div className="App">

      
     <BrowserRouter>
     
     <Routes>

     <Route path="/login" element={<Login setAppState={setAppState} />} />

     </Routes>

     <Navbar></Navbar>
     <Info></Info>


     </BrowserRouter>
      

    </div>
  );
}

export default App;
