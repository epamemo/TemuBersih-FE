import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../helpers";

function UserRoute() {
  const { isLogin, isAdmin } = useContext(UserContext);
  console.log(isLogin && isAdmin);
  return isLogin && !isAdmin ? <Outlet /> : <Navigate to="/register" />;
}

export default UserRoute;
