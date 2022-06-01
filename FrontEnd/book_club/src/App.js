import './App.css';
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Library from "./components/Library";



function App() {

  // const { token, isLoggedIn } = useSelector((state) => {
  //   return {
  //     token: state.loginReducer.token,
  //     isLoggedIn: state.loginReducer.isLoggedIn,
  //   };
  // });
  return (
    <div className="App">

<Routes>
        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Library" element={<Library />} />

      <Route path="/readingList" element={<readingList />} />

        <Route path="/suggestion" element={<suggestion />} />

    
      </Routes>
    </div>
  );
}

export default App;
