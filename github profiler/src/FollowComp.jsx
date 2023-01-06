import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FollowChild } from "./FollowChild";
import Button from "@mui/material/Button";
import "./style.css";

export const FollowComp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [followData, setFollowData] = useState([]);

  function goBack() {
    navigate(-1);
  }
  const { username, type } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/${type}`)
      .then((res) => res.json())
      .then((res) => {
        setFollowData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username, type]);

  return (
    <div className="follow-comp">
      <div className="follow-heading">
        <h1>{type}</h1>
      </div>
      <div className="repo-container">
        {followData.map((elem) => {
          return <FollowChild key={elem.id} repoData={elem} />;
        })}
      </div>
      <div className="gobackbutton">
        <Button id="submit-button" onClick={goBack} variant="contained">
          Go Back
        </Button>
      </div>
    </div>
  );
};
