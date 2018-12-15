import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomButton = styled.button`
  width: 100%;
  height: 64px;
  font-size: 18px;
  color: ${props => (props.disabled ? "#c8c8c8" : "white")};
  background-color: ${props => (props.disabled ? "white" : "#00ce7c")};
  border: 2px solid ${props => (props.disabled ? "#c8c8c8" : "#00ce7c")};
  transition: all .3s ease, width 0ms;

  ${props => (!props.disabled && `
    cursor: pointer;
    &:hover {
      box-shadow: 0 10px 20px #90dade;
    }`
  )}

  @media(min-width: 551px) {
    width: 240px;
  }
`;

export default function Button(props) {
  const { text } = props;
  return <CustomButton type="button" {...props}>{ text }</CustomButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
