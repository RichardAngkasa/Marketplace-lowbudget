import React from "react";
import { useNavigate } from "react-router";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className="gap-3">
      <h1>Administratorrr</h1>
      <button
        className="m-3 border-2 border-black"
        onClick={() => {
          navigate("carts");
        }}
      >
        CARTS
      </button>
      <button
        className="m-3 border-2 border-black"
        onClick={() => {
          navigate("users");
        }}
      >
        USERS
      </button>
      <button
        className="m-3 border-2 border-black"
        onClick={() => {
          navigate("products");
        }}
      >
        PRODUCTS
      </button>
    </div>
  );
}

export default AdminPage;
