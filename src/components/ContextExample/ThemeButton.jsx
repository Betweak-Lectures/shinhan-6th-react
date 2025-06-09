import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  //   const { theme, toggleTheme } = context;

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
    >
      현재 테마: {theme === "light" ? "밝은모드" : "어두운 모드"}
    </button>
  );
}
