import { useEffect, useState } from "react";

export default function CountComponent() {
  // const [state자체, state변경 핸들러 함수] = useState(초기값)

  // State 변경은 반드시 State변경 함수를 이용해서 변경
  const [count, setCount] = useState(0);

  // State는 컴포넌트 자체에서 관리되는 값!
  // State가 변경되면 컴포넌트는 "다시 그린다".
  // 여기서 말하는 "다시 그린다"는 의미는 함수를 다시 실행하겠다는 의미!

  const addCount = () => {
    setCount(count + 1);
    // setCount(1): 0번째 시점
    // setCount(2): 1번째 시점
    // setCount(3): 2번째 시점
  };

  // useEffect(callbackFn, dependencyArray):
  // 컴포넌트가 처음 생기거나 dependencyArray에 있는 값이 변경될때마다 callbackFn을 실행.
  useEffect(() => {
    console.log("데이터 받아오기! (이 함수는 한 번만 실행됩니다.");
    return () => {
      console.log(
        "메모리를 잡아먹으면 리소스 해제 하는 함수를 return 해 주어야 합니다."
      );
    };
  }, []);

  useEffect(() => {
    console.log(`카운트가 증가할때마다 실행! \n -count: ${count}`);
  }, [count]);

  return (
    <div>
      <div>{count}</div>

      <button onClick={addCount}>1 증가</button>
    </div>
  );
}
