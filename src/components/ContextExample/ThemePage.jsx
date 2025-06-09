import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import useTheme from "./useTheme";

export default function ThemePage() {
  //   const { theme, toggleTheme } = useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "#e9e9e9" }
          : { backgroundColor: "black" }
      }
    >
      <div style={{ minHeight: 600 }}>MyPage</div>
    </div>
  );
}
