import React, { Component } from "react";

import { Input, DatePicker, Button } from '../index';
import { UIView, UIActions, UIError, UIErrorMessage } from './registration-form-style';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: props.data.name,
        birthDate: props.data.birthDate || false,
        deathDate: props.data.deathDate || false
      },
      edit: props.data.name ? true : false,
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { data : { name, birthDate, deathDate } } = this.state;
    const validate = name && birthDate && deathDate;
    if (!validate) {
      this.setState({
        errorMessage: "Ops! Por favor verificar os dados"
      });
    } else {
      this.setState({
        errorMessage: ''
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
    const { data, errorMessage, edit } = this.state;

    return (
      <UIView>
        <Input placeholder="Digite um nome" onChange={this.handleChange('name')} value={data.name} />
        <DatePicker value={data.birthDate} placeholder="Escolha a data de nascimento" onChange={this.handleChange('birthDate')} />
        <DatePicker value={data.deathDate} placeholder="Escolha a data de falecimento" onChange={this.handleChange('deathDate')} />
        <UIActions>
        <Button onPress={() => this.handleSubmit()} bg="#d1618a" color="#fff" width="70%" height="50px">{edit ? 'Editar' : 'Cadastrar'}</Button>
        </UIActions>
        {errorMessage !== '' &&
          <UIError>
            <UIErrorMessage>{errorMessage}</UIErrorMessage>
          </UIError>
        }
      </UIView>
    );
  }
}

export default RegistrationForm;
