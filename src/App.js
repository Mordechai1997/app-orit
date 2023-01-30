import NavBar from './componets/NavBar';
import HomePage from './componets/HomePage';
import './App.css'
import { useEffect, useState } from 'react';
import {HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <div >
      <HashRouter>
        <NavBar />
        <Routes >
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

