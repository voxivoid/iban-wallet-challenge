import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Row from "./Row";
import Form from "./Form";
import Input from "./Input";
import Select from "./Select";


const CustomRow = styled(Row)`
  align-items: start;
  flex-wrap: wrap;
`;

const CustomInput = styled(Input)`
  @media(min-width: 551px) {
    max-width: 220px;
  }
`;

const CustomSelect = styled(Select)`
  margin-bottom: 20px;

  @media(min-width: 551px) {
    margin-bottom: 0px;
    max-width: 120px;
    margin-right: 20px;
  }
`;

export default class FormEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryCode: null,
      phoneNumber: "",
      countryCodes: [
        {
          value: "+351",
          label: "+351 Portugal",
        },
        {
          value: "+34",
          label: "+34 Spain",
        },
      ],
    };
  }

  onChangeCountryCode = (countryCode) => {
    this.setState({ countryCode }, this.validateForm);
  }

  onChangePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value }, this.validateForm);
  }

  isPhoneNumberValid = () => {
    const { phoneNumber } = this.state;
    return phoneNumber.length === 9;
  }

  isCountryCodeValid = () => {
    const { countryCode } = this.state;
    return !!countryCode;
  }

  validateForm = () => {
    const { setFormValidState } = this.props;
    setFormValidState(this.isPhoneNumberValid() && this.isCountryCodeValid());
  }

  render() {
    const { phoneNumber, countryCode, countryCodes } = this.state;

    return (
      <Form title="What’s your phone number?" subTitle="Your phone number will be used to link your account and to log into the app.">
        <CustomRow>
          <CustomSelect instanceId="countryCode" label="Country" value={countryCode} options={countryCodes} onChange={this.onChangeCountryCode} isValid={this.isCountryCodeValid()} />
          <CustomInput label="Phone Number" type="text" placeholder="123456789" value={phoneNumber} onChange={this.onChangePhoneNumber} isValid={this.isPhoneNumberValid()} />
        </CustomRow>
      </Form>
    );
  }
}

FormEmail.propTypes = {
  setFormValidState: PropTypes.func.isRequired,
};
