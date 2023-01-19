// import React from "react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserCart() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [produts, setProducts] = useState([]);
  const navigate = useNavigate();

  const cek = parseInt(id);
  console.log(cart);
  console.log(produts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/user/" + cek)
      .then((res) => res.json())
      .then((json) => setCart(json));
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // let cart = [];
  // cartFiltered?.map((i) => {
  //   const productId = i.products.map((j) => j.productId);
  //   const hasil = productId.map((k) => products.filter((l) => l.id === k)[0]);
  //   cart = hasil;
  // });

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </button>
      <h1 className="font">Keranjang</h1>
      <div>{<List cart={cart} />}</div>
    </>
  );
}

const List = ({ cart }) => {
  const navigate = useNavigate();

  return (
    <div>
      {cart.map((a) => (
        <button
          key={a.id}
          onClick={() => {
            navigate("/productPage/" + a.id);
          }}
        >
          <div className="w-96 bg-slate-400 rounded-lg mb-7" key={a.id}>
            <img src={a.image} className="h-10 w-10" />
            <h1>
              <b>Title</b>
              {a.id}
              {a.title}
            </h1>
            <h1>
              <b>Price</b>
              {a.price}$
            </h1>
          </div>
        </button>
      ))}
    </div>
  );
};

export default UserCart;
