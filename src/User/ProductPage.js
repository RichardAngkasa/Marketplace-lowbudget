import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductPage() {
  const [product, setProducts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [id]);

  return product ? <Content a={product} /> : null;
}

const Content = ({ a }) => {
  const navigate = useNavigate();
  return (
    <div key={a.id}>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </button>
      <img src={a.image} />
      <h1>
        <b>Title</b>
        {a.title}
      </h1>
      <h1>
        <b>Description</b>
        {a.description}
      </h1>
      <h1>
        <b>Price</b>
        {a.price}
      </h1>
      <h1>
        <b>Category</b>
        {a.category}
      </h1>
      <h1>
        <b>Rating-rate</b>
        {a.rating.rate}
      </h1>
      <h1>
        <b>Rating-count</b>
        {a.rating.count}
      </h1>
    </div>
  );
};

export default ProductPage;
