import React, { useState } from "react";

export const NonPrimititveState = () => {
  const [details, setDetails] = useState({});
  function handleDetails(e) {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div>
      <label>Name : </label>
      <input type={"text"} name="name" onChange={handleDetails} />
      <label>State : </label>
      <input type={"text"} name="state" onChange={handleDetails} />

      <p>Name : {details.name}</p>
      <p>State : {details.state}</p>
    </div>
  );
};
