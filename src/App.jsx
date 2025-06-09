// import HelloWorld from "./components/HelloWorld";

import BlinkCompnent from "./components/BlinkComponent";
import CaptionImage from "./components/CaptionImage";
import CountComponent from "./components/CountComponent";
import MyButton from "./components/MyButton";
import ExampleUseState from "./components/ExampleUseState";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import ToggleButton from "./components/ToggleButton";
import BannedWordPage from "./components/practices/BannedWordPage/BannedWordPage";
import UserPublicApi from "./components/practices/UserPublicApi";
import StopWatch from "./components/practices/StopWatch";

import Timer from "./components/practices/Timer";

import FocusInputButton from "./components/FocusInputButton";
import InputRefComponent from "./components/InputRefComponent";

import PrimeCalculator from "./components/PrimeCalculator";
import MemoExample from "./components/MemoExample/MemoExample";
import CallbackExample from "./components/CallbackExample/CallbackExample";
import { CallbackExample2 } from "./components/CallbackExample/CallbackExample2";
import ContextExample from "./components/ContextExample/ContextExample";

import BootstrapExample from "./components/BootstrapExample";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [visible, setVisible] = useState(false);

  // console.log("App 함수 호출");

  return (
    <div>
      {/* <FocusInputButton /> */}
      {/* <InputRefComponent /> */}
      {/* <Timer /> */}

      {/* <StopWatch /> */}
      {/* <BannedWordPage /> */}
      {/* <UserPublicApi /> */}
      {/* <ExampleUseState /> */}
      {/* <ToggleButton /> */}
      {/* <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent /> : null} */}
      {/* <BlinkCompnent text="이건 깜빡입니다." /> */}

      {/* <PrimeCalculator text={10} /> */}
      {/* <MemoExample /> */}
      {/* <CallbackExample /> */}
      {/* <CallbackExample2 /> */}
      {/* <ContextExample /> */}
      <BootstrapExample />
    </div>
  );
}

export default App;
