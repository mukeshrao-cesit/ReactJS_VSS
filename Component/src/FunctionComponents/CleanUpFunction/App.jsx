import { useState } from "react";
import { Home } from "./Home";

const App = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView((state) => !state)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {toggleView && <Home />}
    </>
  );
};

export default App;
