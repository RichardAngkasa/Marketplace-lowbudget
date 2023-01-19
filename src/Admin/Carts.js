import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";

function Carts() {
  const [cart, setCart] = useState([]);
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/carts");
    const result = await res.json();
    if (result) {
      setCart(result);
    }
  };
  console.log(cart);
  useEffect(() => {
    getData();
  }, []);
  return (
    <AdminLayout>
      <h1>Keranjang</h1>

      {cart.map((a) => (
        <button>
          <div className="border-2 mb-5 border-black" key={a.id}>
            <h1>id keranjang {a.id}</h1>
            <h1>id orang {a.userId}</h1>
            <h1>{a.date}</h1>
            <h1>
              {a.products.map((a) => (
                <div className="border-2">
                  <h1>{a.productId}</h1>
                  <h1>{a.quantity}</h1>
                </div>
              ))}
            </h1>
          </div>
        </button>
      ))}
    </AdminLayout>
  );
}

export default Carts;
