import React, { Component } from 'react';
import { Text } from 'react-native';

import { Header, Page } from '../components';

class CadastreScreen extends Component {
  render() {
    const { name } = this.props.route.params;

    return (
      <Page header={<Header />}>
        <Text>Cadastro</Text>
        <Text>{name}</Text>
      </Page>
    );
  }
}

export default CadastreScreen;
