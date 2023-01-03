import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

export const Content = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let repoData = location.state.content[0];
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    let followingUrl = repoData.owner.following_url.slice(0, -13);
    fetch(`${followingUrl}`)
      .then((res) => res.json())
      .then((res) => setFollowing(res.length));
    fetch(`${repoData.owner.followers_url}`)
      .then((res) => res.json())
      .then((res) => setFollowers(res.length));
  }, []);

  function goBack() {
    navigate(-1);
  }
  const date = new Date(repoData.created_at);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let createdAt =
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
  return (
    <div>
      <div className="content-container">
        <div className="left-content">
          <img src={repoData.owner.avatar_url} alt="avatar" />
        </div>
        <div className="right-content">
          <h1>{repoData.name}</h1>
          <div
            className="follow-display"
            style={{ display: "flex", gap: "7px" }}
          >
            <p>
              Following &nbsp; <b>{following}</b>
            </p>
            <p>
              Followers &nbsp; <b>{followers}</b>
            </p>
          </div>
          <p style={{ margin: "0" }}>
            Created at &nbsp; <b>{createdAt}</b>
          </p>
          {repoData.description && (
            <p className="desc">{repoData.description}</p>
          )}
        </div>
      </div>
      <div className="gobackbutton">
        <Button id="submit-button" onClick={goBack} variant="contained">
          Go Back
        </Button>
      </div>
    </div>
  );
};
