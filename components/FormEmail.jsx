import React from "react";

import H1 from "./typography/H1";

import Button from "./Button";


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      disabled: true,
    };
  }

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <H1>Teste</H1>
        <Button text="Continue" disabled={disabled} />
      </div>
    );
  }
}
