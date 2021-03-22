import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(result.user, "clicked", displayName, email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
    </div>
  );
};

export default Login;
