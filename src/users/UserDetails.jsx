import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const loadUser = useLoaderData();
  const { image } = loadUser;
  console.log(loadUser);
  return <div></div>;
};

export default UserDetails;
