import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { setEmail, setCountryCode, setPhoneNumber } from "../store";

import FormEmail from "../components/FormEmail";
import FormPhoneNumber from "../components/FormPhoneNumber";
import NavigationButtons from "../components/NavigationButtons";

const ProfileWrapper = styled.div`
  padding: 32px;
  min-height: 100vh;
  height: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 20px 0;
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: "email",
      isFormValid: false,
      formEmailModel: undefined,
      formPhoneNumberModel: undefined,
    };
  }

  onContinue = () => {
    const { currentForm, formEmailModel, formPhoneNumberModel } = this.state;
    const { dispatch } = this.props;

    if (currentForm === "email") {
      this.setState({ currentForm: "phoneNumber" });
      dispatch(setEmail(formEmailModel.email));
    }

    if (currentForm === "phoneNumber") {
      dispatch(setCountryCode(formPhoneNumberModel.countryCode.value));
      dispatch(setPhoneNumber(formPhoneNumberModel.phoneNumber));
    }
  }

  onPrevious = () => {
    const { currentForm } = this.state;

    if (currentForm === "phoneNumber") {
      this.setState({ currentForm: "email" });
    }
  }

  render() {
    const {
      currentForm,
      isFormValid,
      formEmailModel,
      formPhoneNumberModel,
    } = this.state;

    return (
      <ProfileWrapper>
        {currentForm === "email"
        && (
        <FormEmail
          model={formEmailModel}
          setFormModel={(model, validate) => this.setState({ formEmailModel: model },
            () => this.setState({ isFormValid: validate() }))}
        />
        )}
        {currentForm === "phoneNumber"
        && (
        <FormPhoneNumber
          model={formPhoneNumberModel}
          setFormModel={(model, validate) => this.setState({ formPhoneNumberModel: model },
            () => this.setState({ isFormValid: validate() }))}
        />
        )}
        <NavigationButtons
          continueDisabled={!isFormValid}
          onPrevious={this.onPrevious}
          onContinue={this.onContinue}
        />
      </ProfileWrapper>
    );
  }
}

export default connect()(Profile);
