import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import Row from "./Row";

const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  flex-wrap: wrap;
`;

const Previous = styled.span`
  font-weight: bold;
  color: #00ce7c;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin: 20px 0;

  @media(min-width: 551px) {
    margin: 0;
    width: inherit;
  }
`;

const PressEnter = styled.span`
  display: none;
  transition: color .3s ease;
  color: ${props => (props.disabled ? "#c8c8c8" : "black")};
  white-space: pre;

  @media(min-width: 551px) {
    display: block;
    margin: 20px;
  }
`;

const ContinueRow = styled(Row)`
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width: 551px) {
    width: inherit;
  }
`;

export default function NavigationButtons(props) {
  const { continueDisabled } = props;

  return (
    <Container>
      <Previous>Previous</Previous>
      <ContinueRow>
        <PressEnter disabled={continueDisabled}>Press Enter or</PressEnter>
        <Button text="Continue" disabled={continueDisabled} />
      </ContinueRow>
    </Container>
  );
}

NavigationButtons.propTypes = {
  continueDisabled: PropTypes.bool,
};

NavigationButtons.defaultProps = {
  continueDisabled: false,
};
