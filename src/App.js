import './App.css';
import { Routes, Route } from "react-router-dom";
import './resourses/styles/style.scss'
import React from "react";
import Home from './pages/Home';
import Admin from './pages/Admin';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<Admin />} exact />
      </Routes>
    </div>
  );
}

export default App;
