import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUser = data.filter(
      (a) => a.username === username && a.password === password
    )[0];
    if (isUser) {
      sessionStorage.setItem("token", isUser.id);
      navigate("/");
    }
  };

  return (
    <>
      <form>
        <h1>Username</h1>
        <input
          onChange={usernameHandler}
          value={username}
          placeholder="enter your username"
        ></input>
        <h1>Password</h1>
        <input
          onChange={passwordHandler}
          value={password}
          placeholder="enter your password"
        ></input>
        <button onClick={handleSubmit}>Login</button>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            const isUser = data.filter(
              (a) => a.username === username && a.password === password
            )[0];
            if (isUser) {
              sessionStorage.setItem("token", isUser.id);
              navigate("/");
            }
          }}
        >
          Login
        </button> */}
      </form>
    </>
  );
}

export default Login;
