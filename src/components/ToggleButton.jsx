// 버튼을 클릭할 때마다 "ON"과 "OFF"로 상태가 바뀌는 토글 버튼을 만드세요. 상태가 변경될 때마다 useEffect를 사용해 콘솔에 메시지를 출력하세요.

import { useEffect, useState } from "react";

// (설명)
// 버튼의 텍스트는 상태에 따라 "ON" 또는 "OFF"로 변경됩니다.
// 상태가 변경될 때마다 useEffect를 사용해 콘솔에 "Toggle is ON" 또는 "Toggle is OFF" 메시지를 출력합니다.

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(true);

  //   useEffect(() => {
  //     console.log(`Toggle is ${isToggled ? "ON" : "OFF"}`);
  //   }, [isToggled]);

  //   useEffect(() => {
  //     console.log("호출됩니다.");

  //     // useEffect의 callbackFn의 return value는 함수.
  //     return () => {
  //       // return되는 함수는 state가 변화했을 때,
  //       // useEffect가 다시 실행되기 직전 실행.
  //       console.log("기존 함수 호출 종료");
  //     };
  //   }, [isToggled]);

  useEffect(() => {
    // useEffect(callbackFn, depArray)
    // ==> depArray가 변할때마다 callbackFn 실행.
    console.log("scrollEvent등록");
    const onScrollDown = () => {
      console.log("scrollDown");
    };
    document.addEventListener("scroll", onScrollDown);

    return () => {
      console.log("scrollDown 해제");
      document.removeEventListener("scroll", onScrollDown);
    };
  }, [isToggled]);

  return (
    <div style={{ height: 3000 }}>
      <button
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        {isToggled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
