import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../Actions/logout";
import firebase from "../Firebase/Config";

const Nav = (props) => {
  const loginSelector = useSelector((state) => state.logIn);
  const signinSelector = useSelector((state) => state.signIn);
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());
  useEffect(() => {
    firebase.getUserState().then((user) => {
      setUserState(user);
    });
  });

  const logout = async () => {
    console.log("logout user");
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/");
  };

  let buttons;
  if (
    (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
    (signinSelector.user && signinSelector.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    buttons = (
      <React.Fragment>
        <li>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </li>
      </React.Fragment>
    );
  } else {
    buttons = (
      <React.Fragment>
        <li>
          <Link to="/signin">signIn</Link>
        </li>
        <li>
          <Link to="/login">logIn</Link>
        </li>
      </React.Fragment>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> ReactReduxFirebaseAuth </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/create">New post</Link>
        </li>
        {buttons}
      </ul>
    </nav>
  );
};

export default withRouter(Nav);
