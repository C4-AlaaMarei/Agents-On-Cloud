import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

// import Nav from "./Nav";
// import Register from "./components/Register";
// import Login from "./components/Login";
// // import Home from "./components/Home";
// import LeftNav from "./LeftNav";
// // import Profile from "./components/Profile";
// import RightNav from "./RightNav";
// // import Main from "./components/Main";
// import Tap from "./Tap";
function Home() {
  return (
    <div className="Home">
      {/* <div class="container"> */}
        <div>
          {/* <Nav /> */}
        </div>
        <div class="row">
          <div class="col">
            {/* <LeftNav /> */}
          </div>
          <div class="col-6">
          </div>
          <div class="col">
            {/* <RightNav /> */}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
