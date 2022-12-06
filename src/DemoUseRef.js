import { useEffect, useRef } from "react";
import { Form } from "./FormStyle";

const DemoUseRef = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("render everytime.");
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
  };
  return (
    <div>
      <h1>useRef</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" ref={passwordRef} />
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default DemoUseRef;
