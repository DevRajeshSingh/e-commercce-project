import React from 'react'
import { useRouter } from 'next/router'

const BrandName = () => {
  const router = useRouter();
  const { brandname } = router.query;

  return <div>{brandname}</div>;
  
}

export default BrandName