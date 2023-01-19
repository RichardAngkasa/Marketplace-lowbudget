// import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <div className="flex w-screen h-[3rem] bg-gray-300 px-4 fixed top-0">
        <h1 className="font-normal text-lg flex items-center ">TokoEmak</h1>
        {<Cart />}
        {<Login />}
        {<Logout />}
      </div>
      <div>{children}</div> 
      <div className="w-screen h-5 bg-slate-500 fixed bottom-0"></div>
    </>
  );
}

const Cart = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  if (token !== null) {
    return (
      <div className="flex justify-end w-full">
        <button
          className=" bg-gray-500 h-[2.25rem] w-auto px-[20px] rounded-[0.625rem] self-center"
          onClick={() => {
            navigate("userCart/" + token);
          }}
        >
          Cart
        </button>
      </div>
    );
  }
};

const Logout = () => {
  const token = sessionStorage.getItem("token");
  if (token !== null) {
    return (
      <div className="flex justify-end w-full">
        <button
          className=" bg-gray-500 h-[2.25rem] w-auto px-[20px] rounded-[0.625rem] self-center"
          onClick={() => {
            sessionStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
};

const Login = () => {
  const token = sessionStorage.getItem("token");

  if (token === null) {
    return (
      <div className="flex justify-end w-full">
        {" "}
        <Link
          to="login"
          className=" bg-gray-500 h-[2.25rem] w-auto px-[20px] rounded-[0.625rem] self-center"
        >
          <h1 className="font-cabin text-lg font-normal">Login</h1>
        </Link>
      </div>
    );
  }
};

export default Layout;
