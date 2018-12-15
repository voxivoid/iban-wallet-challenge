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
  onChangeEmail = (event) => {
    this.setFormModel({ email: event.target.value });
  }

  setFormModel(newState) {
    const { model, setFormModel } = this.props;

    setFormModel(Object.assign({}, model, newState), this.validate);
  }

  isEmailValid = () => {
    const { model } = this.props;
    return emailValidator.validate(model.email);
  }

  validate = () => this.isEmailValid()

  render() {
    const { model } = this.props;

    return (
      <Form title="What’s your email address?" subTitle="We’ll send you a confirmation email and you’ll use it to log in later.">
        <CustomInput
          type="text"
          placeholder="e.g. jane.doe@email"
          value={model.email}
          onChange={this.onChangeEmail}
          isValid={this.isEmailValid()}
        />
      </Form>
    );
  }
}

FormEmail.propTypes = {
  model: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
  setFormModel: PropTypes.func.isRequired,
};

FormEmail.defaultProps = {
  model: { email: "" },
};
