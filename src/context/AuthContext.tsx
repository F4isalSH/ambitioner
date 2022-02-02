import React, { createContext, useReducer, useEffect } from "react";
import firebase from "firebase/app";
import { projectAuth } from "../firebase/config";
type Actions =
  | { type: "LOGIN"; payload: firebase.User }
  | { type: "LOGOUT" }
  | { type: "AUTH_IS_READY"; payload: firebase.User | null };

export const AuthContext = createContext<firebase.User | null>(null);

export const authReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);
  console.log(state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
