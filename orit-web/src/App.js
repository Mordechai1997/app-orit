import NavBar from './componets/NavBar';
import HomePage from './componets/HomePage';
import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

