// 문제: 사용자의 입력된 시간에 따라 타이머가 실행되도록 하세요.
// → 타이머가 종료되면, 타이머가 끝났다는 메시지를 alert로 화면에 띄우는 기능을 구현하세요.
// → useEffect를 사용해 타이머가 설정된 시간이 끝났을 때 메시지를 표시합니다.
// 설명:
// 타이머가 시작되면 10초 후 자동으로 종료되도록 설정합니다.
// 타이머가 끝나면 "타이머 종료" 메시지를 화면에 표시합니다.
// useEffect를 사용해 타이머가 종료되었는지 체크합니다.

// 심화:
// 사용자로부터 시간을 입력받아서 타이머가 실행되도록 하자.

import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(4);
  const [isStarting, setIsStarting] = useState(false);

  const [userInputSeconds, setUserInputSeconds] = useState(0);

  useEffect(() => {
    if (isStarting) {
      const intervalId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      setSeconds(4);
    }
  }, [isStarting]);

  useEffect(() => {
    if (isStarting && seconds === 0) {
      alert("타이머 종료.");

      setIsStarting(false);
    }
  }, [seconds, isStarting]);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setUserInputSeconds(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            setSeconds(userInputSeconds);
            setIsStarting(true);
          }}
        >
          Start
        </button>
      </div>
      <div>남은시간: {seconds}</div>
    </div>
  );
}
