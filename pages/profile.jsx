import React from "react";
import styled from "styled-components";

import FormEmail from "../components/FormEmail";
import NavigationButtons from "../components/NavigationButtons";

const ProfileWrapper = styled.div`
  padding: 32px;
  min-height: 100vh;
  height: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
    };
  }

  setFormValidState = (isFormValid) => {
    this.setState({ isFormValid });
  }

  render() {
    const { isFormValid } = this.state;
    return (
      <ProfileWrapper>
        <FormEmail setFormValidState={this.setFormValidState} />
        <NavigationButtons continueDisabled={!isFormValid} />
      </ProfileWrapper>
    );
  }
}
