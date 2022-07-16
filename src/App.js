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
import { UserRoute } from "./Routes";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();
  const { isLogin, isAdmin } = useContext(UserContext);

  // useEffect(() => {
  //   if (!isLogin && !isAdmin) {
  //     navigate("/login");
  //   } else {
  //     navigate("/");
  //   }
  // }, [isLogin, isAdmin]);

  console.log(isLogin && isAdmin);
  return (
    <div className="App">
      <Navbar />
      <div className="py-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<UserRoute />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/product" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/detail-product/:id" element={<DetailProduct />} />

          <Route path="/profile/:id" element={<Profile />} />
          {/* </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
