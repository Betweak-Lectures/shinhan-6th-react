import { useEffect, useState } from "react";

export default function BlinkCompnent({ text }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // setInterval(callbackFn, millisecond):  millisecond마다 callbackFn를 실행시키는 함수

    const timeoutId = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return <div>{showText ? text : null}</div>;
}
