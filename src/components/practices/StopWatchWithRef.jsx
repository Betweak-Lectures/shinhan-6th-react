/**
문제: "Start" 버튼을 누르면 스탑워치가 시작되고, "Stop" 버튼을 누르면 스탑워치가 멈추며, "Reset" 버튼을 누르면 스탑워치의 값이 0으로 초기화되는 스탑워치를 만드세요. 타이머 기능은 useEffect를 사용해 구현하세요.

설명:
현재 스탑워치 값을 0부터 시작해 표시합니다.
"Start" 버튼을 누르면 스탑워치가 1초마다 증가하고, "Stop" 버튼을 누르면 스탑워치가 멈춥니다.
"Reset" 버튼을 누르면 스탑워치가 0으로 초기화됩니다.
스탑워치가 실행될 때마다 useEffect를 사용해 매초 스탑워치 값을 업데이트합니다.
*/
import { useState, useRef } from "react";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(null);

  const onClickStart = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const onClickStop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const onClickReset = () => {
    setSeconds(0);
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <div>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClickStop}>Stop</button>
        <button onClick={onClickReset}>Reset</button>
      </div>

      <div>현재 초: {seconds}</div>
    </div>
  );
}
