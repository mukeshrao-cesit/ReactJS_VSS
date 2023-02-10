import React, { useContext } from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import { SignOut } from "./auth/auth";
import Avatar from "@mui/material/Avatar";
import { userNameContext } from "./context/Context";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [anchorEl, setanchorEl] = useState(null);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const userData = useContext(userNameContext);

  function handleUserProfile() {
    navigate(`/users/${search}/repos`);
  }

  async function handleSignOut() {
    const result = await SignOut();
    if (result) {
      navigate("/");
    }
  }

  return (
    <div className="overall-container">
      <div
        className="avatar"
        onClick={(e) => {
          setMenu((prev) => !prev);
          setanchorEl(e.target.value);
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={userData.photoURL}
          sx={{ width: "100px", height: "100px" }}
        />
      </div>
      <Menu
        id="basic-menu"
        open={menu}
        anchorEl={anchorEl}
        onClose={() => {
          setMenu((prev) => !prev);
          setanchorEl(null);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
      <div className="Heading">
        <h1>Hello {userData.displayName}, &nbsp; </h1>
        <h1>Find Your Repository using your Github Username</h1>
      </div>
      <div className="textArea">
        <TextField
          value={search}
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-search"
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
