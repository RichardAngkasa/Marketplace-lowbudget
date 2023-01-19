import React from "react";
import { useEffect, useState } from "react";
import { BiDesktop } from "react-icons/bi";
import { GiPearlNecklace } from "react-icons/gi";
import { IoMdMan } from "react-icons/io";
import { IoMdWoman } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Layout from "../Component/Layout";

function HomePage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // const changeHandler = (e) => {
  //   setInput(e.target.value);
  // };

  // let done = data;
  // if (input !== "") {
  //   const test = data.filter((a) => a.category === input);
  //   done = test;
  // }

  return (
    <Layout>
      <div className="px-4 mt-16">
        <div className="h-[11.25rem] w-full rounded-xl bg-slate-400"></div>
        <div className="flex justify-between my-4 ">
          <button
            className="bg-blue-300 rounded-lg  h-[3.75rem] w-[3.75rem]"
            onClick={() => setInput("electronics")}
          >
            <BiDesktop className="m-auto" />
          </button>
          <button
            onClick={() => setInput("jewelery")}
            className="bg-blue-300 rounded-lg  h-[3.75rem] w-[3.75rem]"
          >
            <GiPearlNecklace className="m-auto" />
          </button>
          <button
            onClick={() => setInput("men's clothing")}
            className="bg-blue-300 rounded-lg   h-[3.75rem] w-[3.75rem]"
          >
            <IoMdMan className="m-auto" />
          </button>
          <button
            onClick={() => setInput("women's clothing")}
            className="bg-blue-300 rounded-lg   h-[3.75rem] w-[3.75rem]"
          >
            <IoMdWoman className="m-auto" />
          </button>
          <button
            onClick={() => setInput("")}
            className="bg-blue-300 rounded-lg   h-[3.75rem] w-[3.75rem]"
          >
            All
          </button>
        </div>
        <Kartu data={data} input={input} />
      </div>
    </Layout>
  );
}

const Kartu = ({ data, input }) => {
  const navigate = useNavigate();
  const test = data.filter((a) => input === "" || a.category === input);

  return (
    <div className="grid  grid-cols-2 gap-[0.625rem]">
      {test.map((a) => (
        <button
          key={a.id}
          onClick={() => {
            navigate("/productPage/" + a.id);
          }}
          value={a.id}
        >
          <div className="w-auto h-auto bg-slate-200 rounded-[0.625rem] p-2">
            <img
              className=" m-auto w-auto  max-w-[6.25rem] max-h-[8.75rem] object-contain"
              src={a.image}
            />
            <div className="bottom-0">
              <h1 className="font-bold text-[12px]">
                {a.title.substring(0, 15)}
              </h1>
              <h1>{a.price}$</h1>
            </div>
            {/* <h1>{a.description.substring(0, 100) + "..."}</h1> */}
          </div>
        </button>
      ))}
    </div>
  );
};

export default HomePage;
