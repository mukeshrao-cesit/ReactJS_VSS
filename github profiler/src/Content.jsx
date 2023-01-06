import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const [repoData, setRepoData] = useState({});
  const { username, reponame } = useParams();
  console.log(username, reponame);

  useEffect(() => {
    console.log("come");
    fetch(`https://api.github.com/repos/${username}/${reponame}`)
      .then((res) => res.json())
      .then((res) => setRepoData(res));
  }, [username, reponame]);

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
  console.log(repoData);
  return (
    <div style={{ margin: "30px", height: "89.5vh" }}>
      <div className="content">
        <div className="content-container">
          <div className="left-content">
            <img src={repoData.owner.avatar_url} alt="avatar" />
          </div>
          <div className="right-content">
            <h1>{repoData.name}</h1>
            <p style={{ margin: "0" }}>
              Created at &nbsp; <b>{createdAt}</b>
            </p>
            {repoData.description && (
              <p className="desc">{repoData.description}</p>
            )}
          </div>
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

export default Content;
