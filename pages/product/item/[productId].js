import React from 'react'
import { useRouter } from "next/router";
import Item from '../../../components/Item';

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (

    <Item id={productId}/>
  )
}

export default Product