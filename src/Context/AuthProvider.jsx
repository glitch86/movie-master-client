import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/sdk";
import { AuthContext } from "./AuthContext";

const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const authInfo = {
    user,
    setUser,
    // loading,
    googleSignIn,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      // console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authInfo}>{!loading && children}</AuthContext>;
};

export default AuthProvider;
