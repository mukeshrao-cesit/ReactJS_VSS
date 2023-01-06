import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChildComp } from "./ChildComp";
import Button from "@mui/material/Button";
import { initaite } from "./redux/slice";

export const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRepos(res);
        dispatch(initaite(res));
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((res) => {
        setFollowers(res.length);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`https://api.github.com/users/${username}/following`)
      .then((res) => res.json())
      .then((res) => {
        setFollowing(res.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);
  function handleGoToMain() {
    navigate("/");
  }
  function handleFollow(type) {
    navigate(`/users/${username}/${type}`);
  }
  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <div className="goToMainContainer" onClick={handleGoToMain}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
      <div className="user-info">
        {repos.length > 0 && (
          <>
            <div className="banner">
              <img src={repos[0].owner.avatar_url} alt="avatar" />
            </div>
            <div className="menu">
              <h1>{repos[0].owner.login}</h1>
            </div>
            <div className="actions">
              <div className="follow-info">
                <h2 onClick={() => handleFollow("followers")}>
                  <span>{followers}</span>
                  <small>Followers</small>
                </h2>
                <h2 onClick={() => handleFollow("following")}>
                  <span>{following}</span>
                  <small>Following</small>
                </h2>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="repo-container">
        {repos.map((elem) => {
          return <ChildComp key={elem.id} repoData={elem} />;
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
