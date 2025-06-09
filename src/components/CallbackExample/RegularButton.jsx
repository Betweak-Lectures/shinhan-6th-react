import { memo } from "react";

export function RegularButton({ onClick, children }) {
  console.log(`버튼 (${children}) 리렌더링!`);
  return (
    <button onClick={onClick} style={{ margin: "5px" }}>
      {children}
    </button>
  );
}

export const MemoizedButton = memo(RegularButton);
