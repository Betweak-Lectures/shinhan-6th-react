// import HelloWorld from "./components/HelloWorld";

import BlinkCompnent from "./components/BlinkComponent";
import CaptionImage from "./components/CaptionImage";
import CountComponent from "./components/CountComponent";
import MyButton from "./components/MyButton";
import ExampleUseState from "./components/ExampleUseState";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

function App() {
  // const [visible, setVisible] = useState(false);

  // console.log("App 함수 호출");

  return (
    <div>
      <ExampleUseState />
      {/* <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent /> : null} */}
    </div>
  );
}

export default App;
