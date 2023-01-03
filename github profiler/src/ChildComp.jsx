import React from "react";
import "./style.css";

export const ChildComp = ({ repoData, handleNavigate }) => {
  return (
    <div className="repo-child" onClick={() => handleNavigate(repoData.id)}>
      <img src={repoData.owner.avatar_url} alt="avatar" />
      <p>{repoData.name}</p>
    </div>
  );
};
