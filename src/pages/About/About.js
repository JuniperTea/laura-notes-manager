import React, { useRef, useState } from "react";
import { useRouteProtector } from "../../shared/hooks/useRouteProtector";

export default function About() {
  const [value, setValue] = useState(0);

  let number = useRef(0);

  let input = useRef();

  function showData() {
    input.current.style.color = "red";
    setValue(value + 1);
  }

  useRouteProtector();

  return (
    <div>
      <input ref={input}></input>
      {input.current?.value}
      <button onClick={showData}>Click</button>
    </div>
  );
}
