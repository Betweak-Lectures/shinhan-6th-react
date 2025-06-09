import { useCallback, useMemo, useState } from "react";

export function CallbackExample2() {
  const [state, setState] = useState("");

  const onInputChange = (e) => {
    setState(e.target.value);
  };
  console.log(state);

  const onSubmit = useCallback(() => {
    console.log("submit:", state);
  }, [state]);

  const onSubmit2 = useMemo(() => {
    return () => {
      console.log("submit", state);
    };
  }, [state]);

  return (
    <div>
      <input type="text" value={state} onChange={onInputChange} />

      <button onClick={onSubmit}>입력</button>
    </div>
  );
}
