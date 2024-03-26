import React, { useEffect } from "react";

function Api() {
  //First Api

  let Api = "https://dummyjson.com/products";

  useEffect(() => {
    fetchData(Api);
  });

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("produdts data ===>", data);
    } catch (error) {
      console.log(error);
    }
  };

  //Second Api

  let Api2 = "https://dummyjson.com/carts";

  useEffect(() => {
    fetchData2(Api2);
  });

  const fetchData2 = async (url2) => {
    try {
      const res2 = await fetch(url2);
      const data2 = await res2.json();
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
}

export default Api;
