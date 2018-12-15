import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomInput = styled.input`
  border: 1px solid ${props => (props.isValid ? "#00ce7c" : "#afafaf")};
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

Input.propTypes = {
  isValid: PropTypes.bool.isRequired,
};
