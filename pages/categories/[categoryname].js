import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { categoryname } = router.query;
  return <div>{categoryname}</div>;
};

export default Category;
