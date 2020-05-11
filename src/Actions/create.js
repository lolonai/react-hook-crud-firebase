import firebase from "../Firebase/Config";

export const createPost = (post) => {
  return async function (dispatch) {
    const firestorePost = await firebase.createPost(post);
    dispatch({ type: "CREATE_POST", payload: firestorePost });
  };
};
