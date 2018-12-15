import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactSelect from "react-select";

import Column from "./Column";

const CustomColumn = styled(Column)`
  flex-direction: column-reverse;
`;

const Label = styled.label`
  color: #afafaf;
  transition: all .2s ease;
  margin-bottom: 10px;
`;

const CustomSelect = styled(ReactSelect)`
  font-family: Circular Std;

  & > div {
    padding: 0;
  }

  .react-select__control {
    border: 1px solid ${props => (props.isValid ? "#00ce7c" : "#afafaf")};
    height: 60px;
    border-radius: 0;
  }
  .react-select__control--is-focused {
    box-shadow: none;

    &, &:hover {
      border: 1px solid ${props => (props.isValid ? "#00ce7c" : "#0a0f35")};
    }
  }

  .react-select__value-container {
    border: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select_menu{
    color: #838383;
    border: 1px solid #0a0f35;
    width: 360px;
  }
`;

const customStyles = {
  menu: () => ({
    color: "#838383",
    border: "1px solid #0a0f35",
    width: "360px",
  }),
};

export default function Select(props) {
  const { label } = props;

  // setTimeout(() => { debugger; }, 5000);

  return (
    <CustomColumn>
      <CustomSelect styles={customStyles} classNamePrefix="react-select" {...props} />
      {label && <Label>{label}</Label>}
    </CustomColumn>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  isValid: PropTypes.bool.isRequired,
};

Select.defaultProps = {
  label: null,
  placeholder: null,
  value: "",
};
