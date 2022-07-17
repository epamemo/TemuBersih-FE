/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import "./css/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./helpers";
import {
  Home,
  Login,
  Register,
  EditProduct,
  Product,
  AddProduct,
  DetailProduct,
  Profile,
} from "./views";
import Navbar from "./components/Navbar";
import { API, setAuthToken } from "./config/api";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    if (state.isLogin === false) {
      navigate("/register");
    } else {
      navigate("/");
    }
  }, [state]);

  const checkAuth = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="py-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<UserRoute />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/edit-campaign/:id" element={<EditProduct />} />
          <Route path="/campaign" element={<Product />} />
          <Route path="/add-campaign" element={<AddProduct />} />
          <Route path="/detail-campaign/:id" element={<DetailProduct />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
