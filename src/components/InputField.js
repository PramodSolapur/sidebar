import React from "react";
import styled from "styled-components";

const InputField = ({ name, label, type }) => {
  return (
    <>
      <Label>{label || name}</Label>
      <Input type={type} />
    </>
  );
};

const Label = styled.label`
  font-size: 16px;
  letter-spacing: 1px;
`;
const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  outline: none;
  border: 1px solid #2192ff;
  border-radius: 4px;
  font-size: 16px;
`;

export default InputField;
