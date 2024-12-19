import React from "react";

function ThemeSwitcher({ toggleTheme, theme }) {
  return (
    <button onClick={toggleTheme} className="theme-switcher">
       {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeSwitcher;
