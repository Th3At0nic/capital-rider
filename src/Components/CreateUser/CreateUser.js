import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import firebaseConfig from "../../firebase.config";

const CreateUser = () => {
    return (
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    );
};

export default CreateUser;