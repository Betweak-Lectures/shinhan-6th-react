import { useRef } from "react";

export default function FocusInputButton() {
  const inputRef = useRef(null);

  const focustInput = () => {
    console.log(inputRef.current);

    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={focustInput}>입력하러 가가</button>

      <div style={{ height: 2000 }}></div>
      <input type="text" ref={inputRef} />

      <div style={{ height: 2000 }}></div>
    </div>
  );
}
