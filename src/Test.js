import React from "react";

function Test() {
  const coba = new Promise((resolve) => {
    setTimeout(() => {
      resolve("selesai");
    }, 3000);
  });
  coba.then(() => {
    console.log(coba);
  });
}

export default Test;
