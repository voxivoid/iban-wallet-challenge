import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Column from "./Column";

const CustomColumn = styled(Column)`
  flex-direction: column-reverse;
`;

const Label = styled.label`
  color: #afafaf;
  transition: all .2s ease;
  margin-bottom: 10px;
`;

const CustomInput = styled.input`
  border: 1px solid ${props => (props.isValid ? "#00ce7c" : "#afafaf")};
  height: 60px;
  width: 100%;
  font-size: 18px;
  padding: 0 18px;
  box-sizing: border-box;
  transition: all .2s ease;

  &::placeholder {
    color: #afafaf;
  }

  &:focus{
    border: 1px solid ${props => (props.isValid ? "#00ce7c" : "#0a0f35")};

    & + ${Label} {
      color: #0a0f35;
    }
  }
`;

export default function Input(props) {
  const { label } = props;

  return (
    <CustomColumn>
      <CustomInput {...props} />
      {label && <Label>{label}</Label>}
    </CustomColumn>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  label: null,
};
