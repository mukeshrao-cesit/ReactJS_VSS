import React, { useEffect, useState } from "react";

export const Home = () => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    console.log("Home is loaded");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log({ clientX, clientY });
      setMousePos({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("Home is Unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <b>
        ({mousePos.x}, {mousePos.y})
      </b>
      <p style={{ padding: 12 }}>I'm Home Component</p>
    </>
  );
};
