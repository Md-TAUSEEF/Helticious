import { useEffect } from "react";
import { useAuth } from "../Auth/Store_Token/Utils_Token"; // Adjust the path if needed
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { logoutUser } = useAuth();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <Navigate to="/login" />;
};

export default Logout;
