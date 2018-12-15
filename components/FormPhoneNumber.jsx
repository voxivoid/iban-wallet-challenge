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

export default class FormPhoneNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.setFormModel({ countryCode });
  }

  onChangePhoneNumber = (event) => {
    this.setFormModel({ phoneNumber: event.target.value });
  }

  setFormModel(newState) {
    const { model, setFormModel } = this.props;

    setFormModel(Object.assign({}, model, newState), this.validate);
  }

  isPhoneNumberValid = () => {
    const { model } = this.props;
    return model.phoneNumber.length >= 9;
  }

  isCountryCodeValid = () => {
    const { model } = this.props;
    return !!model.countryCode.value;
  }

  validate = () => this.isPhoneNumberValid() && this.isCountryCodeValid()

  render() {
    const { model } = this.props;
    const { countryCodes } = this.state;

    return (
      <Form title="What’s your phone number?" subTitle="Your phone number will be used to link your account and to log into the app.">
        <CustomRow>
          <CustomSelect
            instanceId="countryCode"
            label="Country"
            value={model.countryCode}
            options={countryCodes}
            onChange={this.onChangeCountryCode}
            isValid={this.isCountryCodeValid()}
          />
          <CustomInput
            label="Phone Number"
            type="text"
            placeholder="123456789"
            value={model.phoneNumber}
            onChange={this.onChangePhoneNumber}
            isValid={this.isPhoneNumberValid()}
          />
        </CustomRow>
      </Form>
    );
  }
}

FormPhoneNumber.propTypes = {
  model: PropTypes.shape({
    countryCode: PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    phoneNumber: PropTypes.string.isRequired,
  }),
  setFormModel: PropTypes.func.isRequired,
};

FormPhoneNumber.defaultProps = {
  model: {
    countryCode: {
      value: "",
      label: "",
    },
    phoneNumber: "",
  },
};
