import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  createUserWithEmailAndPassword,
  handleGoogleSignIn,
  handleSignOut,
  initializeLoginFramework,
  signInWithEmailAndPassword,
} from "../LoginManager";

initializeLoginFramework();
function Login() {
  const [newUser, setNewUser] = useState(0);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      setUser(res);
      setLoggedInUser(res);
    });
  };

  ///////////// function to act when writing on form
  const handleBlur = (event) => {
    let isFieldValid = true;

    console.log(event.target.name, event.target.value);
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      console.log(isFieldValid);
    }
    if (event.target.name === "password") {
      isFieldValid =
        event.target.value.length > 6 &&
        /[a-z]/i.test(event.target.value) &&
        /[0-9]/.test(event.target.value);
      console.log(isFieldValid);
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  ///////////// Submitting form to google.
  const handleOnSubmit = (event) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      });
    }
    event.preventDefault();
  };

  return (
    <div
      className="bg-info container text-white"
      style={{ textAlign: "center" }}
    >
      {user.isSignedIn ? (
        <button className="btn-warning pt-1 pb-1 mt-2" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className="btn btn-warning m-2 p-3 mt-2" onClick={googleSignIn}>
          <FontAwesomeIcon icon={faGoogle} /> Sign In With Google
        </button>
      )}
      <br />
      {user.isSignedIn && (
        <div>
          <p>Welcome {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
      <br />
      <h1>Our Own Authentication</h1>
      <br />
      <input
        type="checkbox"
        onClick={() => setNewUser(!newUser)}
        name="newUser"
      />
      <label htmlFor="newUser">New user sign up</label>

      <form onSubmit={handleOnSubmit}>
        {newUser && (
          <input
            className="mb-3"
            type="text"
            name="name"
            onBlur={handleBlur}
            placeHolder="Your name."
          />
        )}
        <br />
        <input
          className="mb-3"
          type="text"
          onBlur={handleBlur}
          name="email"
          placeholder="your email"
          required
        />
        <br />
        <input
          className="mb-3"
          type="password"
          onBlur={handleBlur}
          name="password"
          placeholder="your password"
          required
        />
        <br />
        <input type="submit" value={newUser ? "Sign up" : "Sign In"} />
      </form>
      <br />
      <p style={{ color: "red" }}>{user.error}</p>
      {user.success && (
        <p style={{ color: "green" }}>
          User {newUser ? "Created" : "Logged In"} successfully.
        </p>
      )}
    </div>
  );
}

export default Login;
