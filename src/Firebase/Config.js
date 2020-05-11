import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = process.env.API_KEY_FIREBASE;

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  //sign in
  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  //log in
  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
      });
    return logout;
  }

  async getUserState() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  async createPost(post) {
    const storageRef = firebase.storage().ref();
    // create a child inside the storage
    const storageChild = storageRef.child(post.cover.name);
    const postCover = await storageChild.put(post.cover);
    const downloadURL = await storageChild.getDownloadURL(); //url
    const fileRef = postCover.ref.location.path; // actual path

    let newPost = {
      title: post.title,
      content: post.content,
      cover: downloadURL,
      fileref: fileRef,
    };
    const firebasePost = await firebase
      .firestore()
      .collection("posts")
      .add(newPost)
      .catch((err) => {
        console.log(err);
      });

    return firebasePost;
  }
}

export default new Firebase();
