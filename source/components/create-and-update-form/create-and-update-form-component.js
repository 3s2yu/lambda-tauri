import React, { Component } from "react";
import ImagePicker from 'react-native-image-crop-picker';

import { Input, DatePicker, Button, Avatar, Icon } from '../index';
import { UIView, UIActions, UIError, UIErrorMessage, UIAvatar, UIEdit } from './create-and-update-form-style';

class CreateAndUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        image: props.data.image,
        name: props.data.name,
        birthDate: props.data.birthDate || false,
        deathDate: props.data.deathDate || false
      },
      edit: props.data.name ? true : false,
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickSingleBase64 = this.pickSingleBase64.bind(this);
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

  renderImage(image) {
    if (!image.hasImage) {
      return null;
    }
    return (
      <UIAvatar>
        <Avatar hasImage={image.hasImage} imagePath={image.imagePath} size={200} />
        <UIEdit>
          <Button bg="#d1618a" width="auto" onPress={() => this.pickSingleBase64(false)}>
            <Icon name="pencil" size={32} color="#fff" />
          </Button>
        </UIEdit>
      </UIAvatar>
    );
  }

  pickSingleBase64(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    }).then(image => {
      console.log('received base64 image');
      this.setState({
        image: {uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  render() {
    const { data, errorMessage, edit } = this.state;

    return (
      <UIView>
        {this.renderImage(data.image)}
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

export default CreateAndUpdateForm;
