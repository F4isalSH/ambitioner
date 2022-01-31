import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

interface signUpCredentials {
  email: string;
  password: string;
  displayName: string;
}

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch }: any = useAuthContext();

  const signup = async (credentials: signUpCredentials) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }

      await res.user?.updateProfile({ displayName: credentials.displayName });

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err: any) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
