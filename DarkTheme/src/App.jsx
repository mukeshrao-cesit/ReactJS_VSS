import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangeThemeComp } from "./ChangeThemeComp";
import { First_Comp } from "./First_Comp";
import { Second_Comp } from "./Second_Comp";
import { useState } from "react";
import { createContext } from "react";
export const themeProvider = createContext();
export const ThemeProvider = themeProvider.Provider;

function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  function toggleTheme() {
    setChangeTheme((prev) => !prev);
  }
  return (
    <ThemeProvider value={{ changeTheme, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChangeThemeComp />} />
          <Route path="/first" element={<First_Comp />} />
          <Route path="/second" element={<Second_Comp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
