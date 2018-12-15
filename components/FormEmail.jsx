import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import emailValidator from "email-validator";

import Form from "./Form";
import Input from "./Input";

const CustomInput = styled(Input)`
  max-width: 540px;
`;

export default class FormEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value }, this.validateForm);
  }

  isEmailValid = () => {
    const { email } = this.state;
    return emailValidator.validate(email);
  }


  validateForm = () => {
    const { setFormValidState } = this.props;
    setFormValidState(this.isEmailValid());
  }

  render() {
    const { email } = this.state;

    return (
      <Form title="What’s your email address?" subTitle="We’ll send you a confirmation email and you’ll use it to log in later.">
        <CustomInput type="text" placeholder="e.g. jane.doe@email" value={email} onChange={this.onChangeEmail} isValid={this.isEmailValid()} />
      </Form>
    );
  }
}

FormEmail.propTypes = {
  setFormValidState: PropTypes.func.isRequired,
};
