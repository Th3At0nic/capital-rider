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
  const handleSubmit = () => {
    console.log("submit clicked");
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <button className="p-2 m-2 btn-warning" onClick={handleGoogleSignIn}>
        Sign in with google
      </button>
      <br />
      <h2 className="mt-5">Sign Up with email</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="mb-3"
          type="text"
          placeholder="enter your email address"
          required
        />
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="enter your password"
          required
        />
        <br />
        <input
          className="mt-3 bg-success text-white"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Login;
