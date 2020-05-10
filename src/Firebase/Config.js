import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCgkl4GEesaB2Tp_EOMnbSxIlOO45IcvF4",
  authDomain: "reactreduxcrud-6a8bb.firebaseapp.com",
  databaseURL: "https://reactreduxcrud-6a8bb.firebaseio.com",
  projectId: "reactreduxcrud-6a8bb",
  storageBucket: "reactreduxcrud-6a8bb.appspot.com",
  messagingSenderId: "309495951661",
  appId: "1:309495951661:web:18979aa5eb5ba3d456a3a4",
};

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
}

export default new Firebase();
