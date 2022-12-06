import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-family: "Courier New", Courier, monospace;

  div {
    flex: 1;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const Form = styled.form`
  border-radius: 4px;
  border: 1px solid black;
  padding: 12px;

  input {
    display: block;
    margin-bottom: 10px;
  }
`;
