import { useEffect, useState, useRef } from "react";
import { Form } from "./FormStyle";

const DemoUseState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef("");

  useEffect(() => {
    console.log("render everytime.");
  });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onChange = (e) => {
    const { type, value } = e.target;

    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <h1>useState</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={onChange} ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" onChange={onChange} />
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default DemoUseState;
