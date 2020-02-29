import React, { Component } from "react";

import { Input, DatePicker, Button } from '../index';
import { UIView, UIErrorMessage } from './registration-form-style';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        birthDate: false,
        deathDate: false
      },
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
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

  handleChange(name) {
    return value => this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };

  render() {
    const { data, errorMessage } = this.state;

    return (
      <UIView>
        <Input label="Nome" placeholder="Digite um nome" onChange={this.handleChange('name')} />
        <DatePicker value={data.birthDate} placeholder="Escolha a data de nascimento" onChange={this.handleChange('birthDate')} />
        <DatePicker value={data.deathDate} placeholder="Escolha a data de falecimento" onChange={this.handleChange('deathDate')} />
        <Button onPress={() => this.handleSubmit()} width="100%">Cadastrar</Button>
        <UIErrorMessage>{errorMessage}</UIErrorMessage>
      </UIView>
    );
  }
}

export default RegistrationForm;
