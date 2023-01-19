import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AdminLayout from "../Component/AdminLayout";

function Products() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <AdminLayout>
      <div>Products</div>
      <div className="flex justify-between my-4 ">
        <button
          className="bg-blue-300 rounded-lg  h-[3.75rem] w-[3.75rem]"
          onClick={() => setInput("electronics")}
        >
          elel
        </button>
        <button
          onClick={() => setInput("jewelery")}
          className="bg-blue-300 rounded-lg  h-[3.75rem] w-[3.75rem]"
        >
          Jewel
        </button>
        <button
          onClick={() => setInput("men's clothing")}
          className="bg-blue-300 rounded-lg   h-[3.75rem] w-[3.75rem]"
        >
          Men
        </button>
        <button
          onClick={() => setInput("women's clothing")}
          className="bg-blue-300 rounded-lg   h-[3.75rem] w-[3.75rem]"
        >
          Woman
        </button>
        <button
          onClick={() => setInput("")}
          className="bg-blue-300 rounded-lg   h-[3.75rem] w-[3.75rem]"
        >
          All
        </button>
      </div>
      <Kartu data={products} input={input} />
    </AdminLayout>
  );
}
const Kartu = ({ data, input }) => {
  //   const navigate = useNavigate();
  const test = data.filter((a) => input === "" || a.category === input);
  console.log(test);
  return test.map((a) => (
    <div key={a.id}>
      <img src={a.image} />
    </div>
  ));
};

export default Products;
