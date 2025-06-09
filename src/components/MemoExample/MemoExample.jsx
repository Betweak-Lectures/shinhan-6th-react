import { useState } from "react";
import { MemoizedGreeter, RegularGreeter } from "./RegularGreeter";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Alice"); // MemoizedGreeter에 전달될 prop

  console.log("ParentComponent is rendering!");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count: {count}
      </button>
      <button
        onClick={() => setUser(user === "Alice" ? "Bob" : "Alice")}
        style={{ marginLeft: "10px" }}
      >
        Change User (for MemoizedGreeter): {user}
      </button>
      <h3>일반 자식 컴포넌트:</h3>
      <RegularGreeter name="Guest" /> {/* props가 항상 "Guest"로 고정 */}
      <h3>React.memo 사용 자식 컴포넌트:</h3>
      <MemoizedGreeter name={user} />
    </div>
  );
}
