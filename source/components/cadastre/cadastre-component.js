import React, { Component } from "react";

import config from "./elements/config";
import { Form, Button } from '../index';

import { UIView, UIErrorMessage } from './cadastre-style';

class Cadastre extends Component {
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
    const validate = this.refs.cadastreForm.getValue();
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
          ref="cadastreForm"
          type={struct}
          options={options}
          value={this.state.data}
          onChange={formValue => this.handleChange(formValue)}
        />
        <Button onPress={() => this.handleSubmit()} width="100%">Editar</Button>
        <UIErrorMessage>{errorMessage}</UIErrorMessage>
      </UIView>
    );
  }
}

export default Cadastre;
