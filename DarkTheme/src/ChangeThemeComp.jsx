import React from "react";
import { useContext } from "react";
import { themeProvider } from "./App";
import { useNavigate } from "react-router-dom";

export const ChangeThemeComp = () => {
  const navigate = useNavigate();
  const { changeTheme, toggleTheme } = useContext(themeProvider);
  return (
    <div style={{ backgroundColor: changeTheme ? "black" : "red" }}>
      <p
        style={{ color: changeTheme ? "white" : "black" }}
        onClick={() => navigate("/first")}
      >
        First Component
      </p>
      <p
        style={{ color: changeTheme ? "white" : "black" }}
        onClick={() => navigate("/second")}
      >
        Second Component
      </p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
