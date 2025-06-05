/**
 * [jsx문법 내에서 javascript코드 사용법:  중괄호 {} 사용 ]
 *
 * [CSS 적용방법 기초]
 * 1. inline-style로 적용하기  (style 속성)
 *     --> js 객체로 전달해야 합니다.
 *     --> 하이푼으로 연결된 것들은 camelCase로 작성해야 합니다
 *     --> eg.) background-color ==> backgroundColor
 *         eg.) text-align ==> textAlign:
 *
 * 2. className으로 적용하기   (className 속성)
 *     1. css를 정의한다.
 *     2. jsx에서 css를 import한다.
 *     3. className 속성에 명시한다. (js코드이기 때문에, class키워드 사용불가)
 */

import "./HelloWorld.css";

export default function HelloWorld() {
  //   const name = "My Name";

  //   const style1 = { backgroundColor: "red", marginLeft: 30 };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      {/* <div className="box">박스</div> */}
      {/* <div style={{ background-color: "red", margin-left: 30 }}>{name}</div> */}
      {/* <div style={{ backgroundColor: "red", marginLeft: 30 }}>{name}</div> */}
      {/* <div style={style1}>{name}</div> */}

      <p style={{ marginBottom: 0, fontWeight: 700, fontSize: "2em" }}>
        Hello World
      </p>
      <p>This is my First component</p>
    </div>
  );
}
