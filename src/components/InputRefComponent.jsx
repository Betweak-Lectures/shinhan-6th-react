// InputRefComponent.jsx

import { useRef, useState } from "react";

export default function InputRefComponent() {
  const inputRef = useRef();

  const [userInput, setUserInput] = useState("");

  console.log("component 함수 재실행.");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <button
        onClick={() => {
          console.log("state", userInput);
          console.log("ref", inputRef.current.value);
        }}
      >
        값 확인
      </button>
      <div>
        <h1>Ref input</h1>
        <input type="text" ref={inputRef} />
      </div>

      <div>
        <h1>State input</h1>
        <input
          type="text"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
