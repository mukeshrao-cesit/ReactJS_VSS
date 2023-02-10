import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { UserNameContext } from "./context/Context";
const Home = React.lazy(() => import("./Home"));
const Content = React.lazy(() => import("./Content"));
const SignUp = React.lazy(() => import("./SignUp"));
const UserProfile = React.lazy(() => import("./UserProfile"));
const FollowComp = React.lazy(() => import("./FollowComp"));

function App() {
  const [userData, setUserData] = useState({});
  function handleUserName(data) {
    setUserData(data);
  }
  return (
    <div>
      <UserNameContext value={userData}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<>...</>}>
                  <SignUp handleUserName={handleUserName} />
                </React.Suspense>
              }
            />
            <Route
              path="/githubprofiler"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="/users/:username/repos"
              element={
                <React.Suspense fallback={<>...</>}>
                  <UserProfile />
                </React.Suspense>
              }
            />
            <Route
              path="/repos/:username/:reponame"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Content />
                </React.Suspense>
              }
            />
            <Route
              path="/users/:username/:type"
              element={
                <React.Suspense fallback={<>...</>}>
                  <FollowComp />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserNameContext>
    </div>
  );
}

export default App;
