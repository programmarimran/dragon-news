import React, { createContext } from "react";
import { app } from "../Firebase/Firebase.config";
export const AuthContext = createContext( null);
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth=getAuth(app)
const AuthProvider = ({ children }) => {

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
    const user={
        createUser,
    }
  return (
    <>
      <AuthContext value={user}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
