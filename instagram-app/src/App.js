import React from "react"
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from "./Components/SignupPage/SignupPage";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
<Route path="/signup" element={<SignupPage/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<LoginPage/>}/>
<Route path="/explore" element={<Explore/>}/>
<Route path="/username" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
      </div>
  );
}

export default App;
