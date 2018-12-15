import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const H2 = styled.h2`
  margin-bottom: 50px;

  @media(min-width: 551px) {
    margin-bottom: 100px;
  }
`;

export default function Form(props) {
  const { title, subTitle, children } = props;

  return (
    <form>
      <h1>{title}</h1>
      <H2>{subTitle}</H2>
      {children}
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
