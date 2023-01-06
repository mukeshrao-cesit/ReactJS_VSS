import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const FollowChild = ({ repoData }) => {
  const navigate = useNavigate();

  function handleFollowDetail(username) {
    navigate(`/users/${username}/repos`);
  }

  return (
    <div onClick={() => handleFollowDetail(repoData.login)}>
      <div className="follow-card">
        <div className="follow-banner">
          <img src={repoData.avatar_url} alt="profile pic" />
        </div>
        <h2 className="follow-name">{repoData.login}</h2>
      </div>
    </div>
  );
};
