import React, { useState, useEffect } from "react";
import Item from "./../../components/Item"
const Product = () => {
  const [product, setProduct] = useState();

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Item/>
    </>
  );
};

export default Product;
