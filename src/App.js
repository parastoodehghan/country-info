import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Router>
        <header>
          <h1>Country Info</h1>
          <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:cca3" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
