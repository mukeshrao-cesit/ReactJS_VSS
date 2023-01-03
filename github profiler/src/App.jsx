import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./Content";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
