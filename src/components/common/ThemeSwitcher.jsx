import { Sun, Moon } from "lucide-react";
import { React, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col items-center  z-50">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-9 h-9 rounded-full 
                    shadow-3xl border-2 border-NavBorder text-NavBorder bg-switchbg
                   hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun className="text-NavBorder w-6 h-6" />
        ) : (
          <Moon className="text-NavBorder w-6 h-6" />
        )}
      </button>
      {/* <div>
        <div className="text-sm text-NavBorder ">{theme === "dark" ? <p>Light Mood</p> : <p>Dark Mood</p>}</div>
      </div> */}
    </div>
  );
}
