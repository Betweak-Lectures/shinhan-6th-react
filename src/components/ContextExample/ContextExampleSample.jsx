import { useState } from "react";

function Root() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <CompA theme={theme} />
      <CompB theme={theme} />
    </div>
  );
}

function CompA({ theme }) {
  return <>{theme}</>;
}

function CompB({ theme }) {
  return (
    <>
      {theme}
      <Compc theme={theme} />
    </>
  );
}

function CompC({ theme }) {
  return (
    <>
      <div>
        {theme}
        <CompD theme={theme} />
        <CompE theme={theme} />
      </div>
    </>
  );
}
function CompD({ theme }) {
  return <>{theme}</>;
}
function CompE({ theme }) {
  return (
    <>
      {theme}
      <div>
        <CompF theme={theme} />
      </div>
    </>
  );
}
function CompF({ theme }) {
  return <>{theme}</>;
}
