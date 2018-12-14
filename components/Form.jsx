import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H2 = styled.h2`
  margin-bottom: 100px;
`;


export default function Input(props) {
  const { title, subTitle, children } = props;

  return (
    <form>
      <h1>{title}</h1>
      <H2>{subTitle}</H2>
      {children}
    </form>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
