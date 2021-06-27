import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuthContext() {
  const { user, signInWithGoogle } = useContext(AuthContext);

  return {
    user,
    signInWithGoogle,
  };
}
