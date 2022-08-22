import './App.css';
import { Routes, Route } from "react-router-dom";
import './resourses/styles/style.scss'
import React from "react";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from "./pages/Login";
import Header from "./components/Header";
import Success from "./pages/Success";
import SuccessRedirect from "./pages/SuccessRedirect";
import Error404 from "./pages/Error";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/admin" element={<Admin />} exact />
        <Route path="/login" element={<Login />} exact/>
        <Route path="/login/:token" element={<SuccessRedirect />} exact/>
        <Route path="/success" element={<Success />} exact/>
        <Route path="/404" element={<Error404 />} exact/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
