import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ChildComp } from "./ChildComp";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { initaite } from "./redux/slice";

export const Home = () => {
  const [search, setSearch] = useState("");
  const repoData = useSelector((state) => state.repo.repo);
  const [repos, setRepos] = useState(repoData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavigate(id) {
    let content = repos.filter((elem) => {
      return elem.id === id;
    });
    navigate("/content", { state: { content: content } });
  }

  function apiCall() {
    fetch(`https://api.github.com/users/${search}/repos`)
      .then((res) => res.json())
      .then((res) => {
        setRepos(res);
        dispatch(initaite(res));
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Button id="submit-button" onClick={apiCall} variant="contained">
          Search
        </Button>
      </div>
      <div className="repo-container">
        {repos.map((elem) => {
          return (
            <ChildComp
              key={elem.id}
              handleNavigate={handleNavigate}
              repoData={elem}
            />
          );
        })}
      </div>
    </div>
  );
};
