import { Sun, Moon } from "lucide-react";
import { React, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col items-center absolute top-18 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-full 
                    shadow-3xl border-2 border-primary text-primary bg-switchbg
                   hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun className="text-primary w-6 h-6" />
        ) : (
          <Moon className="text-primary w-6 h-6" />
        )}
      </button>
      <div>
        <div className="text-sm text-primary ">{theme === "dark" ? <p>Light Mood</p> : <p>Dark Mood</p>}</div>
      </div>
    </div>
  );
}
