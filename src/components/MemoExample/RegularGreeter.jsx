import { memo } from "react";

// 최적화되지 않은 자식 컴포넌트
// 이 컴포넌트는 props가 변경되지 않아도 부모가 리렌더링되면 함께 리렌더링됩니다.
export function RegularGreeter({ name }) {
  console.log(`RegularGreeter (${name}) is rendering!`);
  return <p>Hello, {name}! (Regular)</p>;
}

// React.memo로 최적화된 자식 컴포넌트
// 이 컴포넌트는 자신의 props가 변경되었을 때만 리렌더링됩니다.
export const MemoizedGreeter = memo(({ name }) => {
  console.log(`MemoizedGreeter (${name}) is rendering!`);
  return <p>Hello, {name}! (Memoized)</p>;
});
