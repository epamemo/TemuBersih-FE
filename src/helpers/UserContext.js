import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState({
    isLogin: false,
    isAdmin: false,
  });

  const toggleLogin = () => {
    setUser({ isLogin: true, isAdmin: true });
  };

  const toggleLogout = () => {
    setUser({ isLogin: false, isAdmin: false });
  };

  return (
    <UserContext.Provider
      value={{ ...user, toggleLogin: toggleLogin, toggleLogout: toggleLogout }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
