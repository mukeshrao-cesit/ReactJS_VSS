import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FollowChild } from "./FollowChild";
import Button from "@mui/material/Button";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";

export const FollowComp = () => {
  const navigate = useNavigate();
  const [followData, setFollowData] = useState([]);

  function goBack() {
    navigate(-1);
  }
  const { username, type } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/${type}`, {
      headers: {
        Authorization:
          "Bearer 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",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFollowData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username, type]);

  return (
    <>
      {followData.length > 0 ? (
        <div className="follow-comp">
          <div className="follow-heading">
            <h1>{type}</h1>
          </div>
          <div className="repo-container">
            {followData.map((elem) => {
              return <FollowChild key={elem.id} repoData={elem} />;
            })}
          </div>
          <div className="gobackbutton back-btn">
            <Button id="submit-button" onClick={goBack} variant="contained">
              Go Back
            </Button>
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
