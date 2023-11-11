import React from "react"
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from "./Components/SignupPage/SignupPage";
import Home from "./Components/HomePage/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
 <Route path="/signup" element={<SignupPage/>}/>
 <Route path="/login" element={<LoginPage/>}/>
 <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
      </div>
  );
}

export default App;
