import { useState } from "react";
import CleanUpV2 from "./CleanUpV2";
import { Home } from "./Home";

const App = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView((state) => !state)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {toggleView && (
        //  <Home />
        <CleanUpV2 />
      )}
    </>
  );
};

export default App;
