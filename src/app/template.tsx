"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <>
      <h1>Hello World</h1>
      <div>{children}</div>
    </>
  );
}
