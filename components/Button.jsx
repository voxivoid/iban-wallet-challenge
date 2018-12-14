import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Button(props) {
  const { text, disabled } = props;
  return <CustomButton type="button" disabled={disabled}>{ text }</CustomButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

const CustomButton = styled.button`
  width: 240px;
  height: 64px;
  font-size: 18px;
  color:  ${props => (props.disabled ? "#c8c8c8" : "white")};
  background-color: ${props => (props.disabled ? "white" : "#00ce7c")};
  border: 2px solid ${props => (props.disabled ? "#c8c8c8" : "#00ce7c")};
  transition: all .3s ease;

  ${props => (!props.disabled && `
    &:hover {
      box-shadow: 0 10px 20px #00ce7c;
    }`
  )}
`;
