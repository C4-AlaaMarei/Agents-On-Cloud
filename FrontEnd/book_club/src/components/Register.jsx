import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

function User() {
  const navigate = useNavigate();

  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [role_id, setRole_id] = useState("");

  console.log(role_id);

  const createUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/user/", {
        user_name: user_name.toLowerCase(),
        email: email.toLowerCase(),
        password,
        role_id,
      })
      .then((result) => {
        setUser_name("");
        setEmail("");
        setPassword("");
        // setRadioValue("");
        setRole_id("");
        navigate("/login");
      })
      .catch((err) => {
        setMessage(err);

        console.log(message);
      });
  };

  function showPass() {
    const pass = document.getElementById("formBasicPassword");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  // const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  // const handleChange = (val) => setValue(val);

  // const [checked, setChecked] = useState(false);

  return (
    <>
      <div
        className="user"
        style={{ height: "700px", backgroundColor: "#ffffb3" }}
      >
        <h1>Register page</h1>

        <Form
          float="center"
          style={{
            width: "450px",
            marginLeft: "500px",
            marginTop: "50px",
            backgroundColor: "smoke",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              onChange={(e) => {
                setUser_name(e.target.value);
              }}
              value={user_name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
              value={password}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              onClick={showPass}
            />
          </Form.Group>

          <br />
          <div className="adminOrUser">
            {/* <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton> */}

            <ButtonGroup>
              {/* {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              // checked={radioValue === radio.value}
              // onClick={setRadioValue}

              onClick={(e) => setRadioValue(e.target.value)}
            >
              {radio.name}
            </ToggleButton>
          ))} */}
              <ToggleButton
                type="radio"
                name="Admin"
                onClick={(e) => {
                  setRole_id("1");
                }}
                // value={"1"}
              >
                Admin
              </ToggleButton>
              <ToggleButton
                type="radio"
                name="User"
                // value={"2"}
                onClick={(e) => {
                  setRole_id("2");
                }}
              >
                Fan
              </ToggleButton>
            </ButtonGroup>





          </div>

          <br />
          <br />

          <Button
            variant="primary"
            type="submit"
            // style={{ marginLeft: "60px" }}
            onClick={createUser}
          >
            Register
          </Button>
        </Form>
        <Link className="a" to={"/login"}
         style={{ marginLeft: "120px" }}
         >
          Already Have Account !
        </Link>
      </div>
    </>
  );
}

export default User;
