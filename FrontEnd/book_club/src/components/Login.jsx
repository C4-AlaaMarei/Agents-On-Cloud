import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { logIn } from "../Reducer/loginReducer";
import jwt from "jwt-decode";
// import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";


function Login() {
  const history = useNavigate();
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  const [status, setStatus] = useState(false);

  const SignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login/", {
        email,
        password,
      });
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", jwt(res.data.token).userName);
        localStorage.setItem("isAdmin?", jwt(res.data.token).roleId);
       console.log(res.data.token.userName)
        setEmail("");
        setPassword("");

        setIsAdmin(localStorage.getItem("isAdmin?"));
        history("/home");

        setMessage("");
        // console.log(isAdmin);
        // setStatus(true);

        // console.log(password, "ssssssssssssss", email);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      // setStatus(false);
    }
  };

  // if (isAdmin === 1) {
  //   history("/admin");
  // } else if (isAdmin === 2) {
  //   history("/home");
  // }

  function showPass() {
    const pass = document.getElementById("formBasicPassword");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  return (
    <div
      className="login"
      style={{ backgroundColor: "#e0e0d1", height: "700px" }}
    >
      <h1>Login page</h1>

      <Form
        onSubmit={SignIn}
        float="center"
        style={{ width: "450px", marginLeft: "500px", marginTop: "50px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" onClick={showPass} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div id="mess">{message ? message : null}</div>
    </div>
  );
}

export default Login;
