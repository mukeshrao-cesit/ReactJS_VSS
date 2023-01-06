import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content";
import { FollowComp } from "./FollowComp";
import { Home } from "./Home";
import { UserProfile } from "./UserProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username/repos" element={<UserProfile />} />
          <Route path="/repos/:username/:reponame" element={<Content />} />
          <Route path="/users/:username/:type" element={<FollowComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
