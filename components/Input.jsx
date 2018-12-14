import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  border: 1px solid #afafaf;
  height: 60px;
  width: 100%;
  font-size: 18px;
  padding: 0 18px;
  box-sizing: border-box;

  &::placeholder {
    color: #afafaf;
  }
`;

export default function Input(props) {
  return <CustomInput {...props} />;
}
