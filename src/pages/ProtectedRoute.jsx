import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  // If there is no user, redirect them to the login page
  if (!user) {
    return <Navigate to="/" />;
  }

  // If there IS a user, render the children (the protected page)
  return children;
};

export default ProtectedRoute;
