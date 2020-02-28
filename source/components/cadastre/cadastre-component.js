import React, { Component } from "react";
import { View, Text } from "react-native";

import config from "./elements/config";
import { Form, Button } from '../index';

class Cadastre extends Component {
  constructor() {
    super();
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
      <View>
        <Form
          ref="cadastreForm"
          type={struct}
          options={options}
          value={this.state.data}
          onChange={formValue => this.handleChange(formValue)}
        />
        <Button onPress={() => this.handleSubmit()}>Editar</Button>
        <Text>{errorMessage}</Text>
      </View>
    );
  }
}

export default Cadastre;
