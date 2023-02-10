import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const [repoData, setRepoData] = useState({});
  const { username, reponame } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`, {
      headers: {
        Authorization:
          "Bearer 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",
      },
    })
      .then((res) => res.json())
      .then((res) => setRepoData(res));
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
    <>
      {repoData?.owner ? (
        <div className="overall-content-container">
          <div className="content">
            <div className="content-container">
              <div className="left-content">
                {repoData && (
                  <img src={repoData?.owner?.avatar_url} alt="avatar" />
                )}
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
      ) : (
        <div className="loader">
          <CircularProgress color="inherit" sx={{ color: "white" }} />
        </div>
      )}
    </>
  );
};

export default Content;
{
  /* <CircularProgress color="inherit" /> */
}
