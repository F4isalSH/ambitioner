import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch }: any = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
      setIsPending(false);
      setError(null);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }
  };
  return { error, isPending, logout };
};
