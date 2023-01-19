import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AdminLayout from "../Component/AdminLayout";

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <AdminLayout>
      <div>Users</div>
      <div className="grid grid-cols-1">
        <Kartu data={data} />
      </div>
    </AdminLayout>
  );
}

const Kartu = ({ data }) => {
  const navigate = useNavigate();
  return data.map((a) => (
    <button
      onClick={() => {
        navigate("/adminPage/users/" + a.id);
      }}
    >
      <div className="w-full  bg-sky-200 rounded-md mb-2 p-2">
        <h1>{a.name.firstname + " " + a.name.lastname}</h1>
      </div>
    </button>
  ));
};

export default Users;
