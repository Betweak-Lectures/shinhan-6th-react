/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

export default function ExampleUseState() {
  // useState 사용이유
  // 컴포넌트 함수가 호출되면 ui를 리턴한다.
  // ui에 사용되는 변수가 변경되면 ui를 다시 그릴 필요가 있다. (= 컴포넌트 함수를 다시 호출해야 한다.)
  // 특정 변수가 변경되면 해당 컴포넌트 함수를 다시 실행할 수 있도록 도와주는 hook ==> const [state, setState] = useState()

  const [count, setCount] = useState(0);
  // let count = 0;

  // useEffect는 왜 사용?
  const [userNum, setUserNum] = useState(1);

  useEffect(() => {
    console.log("현재 count", count);
  }, [count]);

  useEffect(() => {
    console.log("서버에 요청");
    fetch(`https://jsonplaceholder.typicode.com/users/${userNum}`);
  }, [userNum]);

  // const afterCountIncrease = () => {
  //   console.log("현재 count", count);
  // };
  // const afterUserNumIncrease = () => {
  //   console.log("서버에 요청");
  //   fetch(`https://jsonplaceholder.typicode.com/users/${userNum}`);
  // };
  // afterCountIncrease();
  // afterUserNumIncrease();

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setUserNum(userNum + 1);
        }}
      >
        유저 num 증가 {userNum}
      </button>

      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        1 증가
      </button>
    </div>
  );
}
