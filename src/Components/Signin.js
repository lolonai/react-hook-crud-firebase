import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
// action
import { createUser } from "../Actions/signin";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const createUserAction = (email, password) =>
    dispatch(createUser(email, password));

  const signin = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let user = await createUserAction(email, password);
    } else {
      console.log("need to fill the credentials");
    }
  };

  const redirectTo = routeRedirect;
  if (routeRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <form onSubmit={signin}>
        <p>Create an account</p>
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
        <input type="submit" value="Create account" />
      </form>
    </React.Fragment>
  );
};

export default Signin;
