import React from "react";
import { useContext } from "react";
import { themeProvider } from "./App";
import { useNavigate } from "react-router-dom";

export const Second_Comp = () => {
  const navigate = useNavigate();
  const { changeTheme } = useContext(themeProvider);
  return (
    <div style={{ backgroundColor: changeTheme ? "black" : "red" }}>
      <p
        style={{ color: changeTheme ? "white" : "black" }}
        onClick={() => navigate(-1)}
      >
        Second Component
      </p>
    </div>
  );
};
