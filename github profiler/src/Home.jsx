import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleUserProfile() {
    navigate(`/users/${search}/repos`);
  }

  return (
    <div className="overall-container">
      <div className="Heading">
        <h1>Find Your Repository using your Github Username</h1>
      </div>
      <div className="textArea">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Enter UserName"
          variant="outlined"
          placeholder="Enter your Github Name"
        />
        <Button
          id="submit-button"
          onClick={handleUserProfile}
          variant="contained"
        >
          Search
        </Button>
      </div>
    </div>
  );
};
