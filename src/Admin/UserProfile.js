import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserProfile() {
  const [user, setUser] = useState([]);
  const { id } = useParams("");
  const cek = parseInt(id);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/users/" + cek);
    const result = await res.json();

    if (result) {
      setUser(result);
    }
  };

  useEffect(() => {
    // fetch("https://fakestoreapi.com/users/" + cek)
    //   .then((res) => res.json())
    //   .then((json) => setUser(json));

    getData();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </button>
      {user ? (
        <div>
          <h1>{user.id}</h1>
          <h1>{user.email}</h1>
          <h1>{user.username}</h1>
          <h1>{user.password}</h1>
          <h1>{user.name?.firstname}</h1>
          <h1>{user.name?.lastname}</h1>
          <h1>{user.phone}</h1>
          <h1>{user.address?.geolocation.lat}</h1>
          <h1>{user.address?.geolocation.long}</h1>
          <h1>{user.address?.city}</h1>
          <h1>{user.address?.street}</h1>
          <h1>{user.address?.number}</h1>
          <h1>{user.zipcode}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default UserProfile;
