import { useState, useEffect, FormEvent, useRef } from "react";
import "./Timer.css";

export function Timer() {
  const [flag, setFlag] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFlag(true)
    counter(num)
  };
  const counter = (n: number) => {
    if (n === 0) { return setFlag(false) }
    setTimeout(() => {
      setNum(() => num - 1)
    }, 1000);
  }
  useEffect(() => {
    if (flag === true) { counter(num) }
  }, [num]);
  return (
    <div id="TimerDiv">
      <div id="countr">{flag ? num : null}</div>
      <form onSubmit={handleSubmit}>
        <input
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          id="input" type="number" placeholder="enter secends" />
        <button >ok</button>
      </form>
    </div>
  )
}