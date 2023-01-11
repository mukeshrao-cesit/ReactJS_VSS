import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";

export const ChildComp = ({ repoData }) => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/repos/${repoData.owner.login}/${repoData.name}`);
  }
  return (
    <>
      {repoData ? (
        <div className="card" onClick={handleNavigate}>
          <h2 className="name">{repoData.name}</h2>
          <div className="title">{repoData.owner.login}</div>
          <div className="visibility">
            <p>{repoData.visibility}</p>
          </div>
        </div>
      ) : (
        <div className="loader">
          <CircularProgress color="inherit" sx={{ color: "white" }} />
        </div>
      )}
    </>
  );
};
