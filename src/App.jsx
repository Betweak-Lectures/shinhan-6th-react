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

function App() {
  // const [visible, setVisible] = useState(false);

  // console.log("App 함수 호출");

  return (
    <div>
      {/* <BannedWordPage /> */}
      <UserPublicApi />
      {/* <ExampleUseState /> */}
      {/* <ToggleButton /> */}
      {/* <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent /> : null} */}
      {/* <BlinkCompnent text="이건 깜빡입니다." /> */}
    </div>
  );
}

export default App;
