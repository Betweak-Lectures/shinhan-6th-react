import ThemeButton from "./ThemeButton";
import ThemePage from "./ThemePage";

import ThemeProvider from "./ThemeProvider";

export default function ContextExample() {
  return (
    <ThemeProvider>
      <div style={{ width: 500 }}>
        <ThemeButton />
        <ThemePage />
      </div>
    </ThemeProvider>
  );
}
