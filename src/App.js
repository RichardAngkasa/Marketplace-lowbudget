import { Routes, Route } from "react-router-dom";
import AdminPage from "./Admin/AdminPage";
import Carts from "./Admin/Carts";
import Products from "./Admin/Products";
import UserProfile from "./Admin/UserProfile";
import Users from "./Admin/Users";

import "./App.css";
import Test from "./Test";
import HomePage from "./User/HomePage";
import Login from "./User/Login";
import ProductPage from "./User/ProductPage";
import UserCart from "./User/UserCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="userCart/:id" element={<UserCart />} />
        <Route path="productPage/:id" element={<ProductPage />} />
        <Route path="adminPage" element={<AdminPage />} />
        <Route path="adminPage/Carts" element={<Carts />} />
        <Route path="adminPage/users" element={<Users />} />
        <Route path="adminPage/products" element={<Products />} />
        <Route path="adminPage/users/:id" element={<UserProfile />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
