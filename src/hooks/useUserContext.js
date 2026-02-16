import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// Hook: You use this with useContext(UserContext) inside any component that needs the user data.
export const useUserContext = () => {
  return useContext(UserContext);
};
