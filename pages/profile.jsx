import React from "react";
import styled from "styled-components";

import FormEmail from "../components/FormEmail";

const ProfileWrapper = styled.div`
  padding: 32px;
  min-height: 100vh;
  box-sizing: border-box;
`;

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <ProfileWrapper>
        <FormEmail />
      </ProfileWrapper>
    );
  }
}
