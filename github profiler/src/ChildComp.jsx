import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

export const ChildComp = ({ repoData }) => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/repos/${repoData.owner.login}/${repoData.name}`);
  }
  return (
    <div className="card" onClick={handleNavigate}>
      <h2 className="name">{repoData.name}</h2>
      <div className="title">{repoData.owner.login}</div>
      <div className="visibility">
        <p>{repoData.visibility}</p>
      </div>
    </div>
  );
};
