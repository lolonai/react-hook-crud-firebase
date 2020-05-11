import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Actions/login";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const logInUserAction = (email, password) =>
    dispatch(loginUser(email, password));

  const login = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let user = await logInUserAction(email, password);
      if (user) {
        setRedirect(true);
      }
    } else {
      console.log("need to fill the credentials");
    }
  };

  const redirectTo = redirect;
  if (redirectTo) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <form onSubmit={login}>
        <p>Welcome back</p>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </React.Fragment>
  );
};

export default Login;
