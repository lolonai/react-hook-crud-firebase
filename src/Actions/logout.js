import firebase from "../Firebase/Config";

export const logoutUser = () => {
  return async function (dispatch) {
    await firebase.logout();
    dispatch({ type: "LOGIN_USER", payload: {} });
    dispatch({ type: "CREATE_USER", payload: {} });
  };
};
