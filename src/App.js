import React from "react";
import DemoUseRef from "./DemoUseRef";
import DemoUseState from "./DemoUseState";
import { Wrapper } from "./FormStyle";

export default function App() {
  return (
    <Wrapper>
      <DemoUseRef />
      <DemoUseState />
    </Wrapper>
  );
}
