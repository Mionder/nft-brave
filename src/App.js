import './App.css';
import { Routes, Route } from "react-router-dom";
import './resourses/styles/style.scss'
import React from "react";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from "./pages/Login";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/admin" element={<Admin />} exact />
        <Route path="/login" element={<Login />} exact/>
      </Routes>
    </div>
  );
}

export default App;
