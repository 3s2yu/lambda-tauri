import React, { Component } from "react";

import config from "./elements/config";
import { Form, Button } from '../index';

import { UIView, UIErrorMessage } from './registration-form-style';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      struct: config.Struct,
      options: config.options,
      data: {
        name: ""
      },
      errorMessage: ""
    };
  }

  handleSubmit = () => {
    const validate = this.refs.registrationForm.getValue();
    if (!validate) {
      this.setState({
        errorMessage: "Ops! Por favor verificar os dados"
      });
    } else {
      this.setState({
        errorMessage: ""
      });
    }
  };

  handleChange = formValue => {
    this.setState({
      data: formValue
    });
  };

  render() {
    const { struct, options, errorMessage } = this.state;

    return (
      <UIView>
        <Form
          ref="registrationForm"
          type={struct}
          options={options}
          value={this.state.data}
          onChange={formValue => this.handleChange(formValue)}
        />
        <Button onPress={() => this.handleSubmit()} width="100%">Cadastrar</Button>
        <UIErrorMessage>{errorMessage}</UIErrorMessage>
      </UIView>
    );
  }
}

export default RegistrationForm;
