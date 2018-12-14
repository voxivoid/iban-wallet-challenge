import React from "react";

import Form from "./Form";
import Button from "./Button";
import Input from "./Input";

export default class FormEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      disabled: true,
    };
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  render() {
    const { email, disabled } = this.state;

    return (
      <Form title="What’s your email address?" subTitle="We’ll send you a confirmation email and you’ll use it to log in later.">
        <Input type="text" placeholder="e.g. jane.doe@email" value={email} onChange={this.onChangeEmail} />
        <Button text="Continue" disabled={disabled} />
      </Form>
    );
  }
}
