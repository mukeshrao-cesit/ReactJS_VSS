import React from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "./auth/auth";
import "./style.css";
import Button from "@mui/material/Button";

export const SignUp = ({ handleUserName }) => {
  const navigate = useNavigate();
  async function handleSignUp() {
    const result = await signUp();
    if (result) {
      handleUserName(result);
      navigate("/githubprofiler");
    }
  }
  return (
    <div className="signUp-container">
      <Button id="submit-button" onClick={handleSignUp} variant="contained">
        Sign In With Git Hub
      </Button>
    </div>
  );
};
