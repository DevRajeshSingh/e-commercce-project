import { useRouter } from "next/router";
import React from "react";
const Appliance = () => {
  const router = useRouter();
  const { appliance } = router.query;

  return <div>{appliance}</div>;
};

export default Appliance;
