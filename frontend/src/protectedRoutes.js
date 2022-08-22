import { Outlet } from "react-router-dom";
import Signin from "./pages/signin/Signin";

const useAuth = () => {
  const user = false;

  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Signin />;
};

export default ProtectedRoutes;
