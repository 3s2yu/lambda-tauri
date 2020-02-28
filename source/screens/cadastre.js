import React, { Component } from 'react';
import { Text } from 'react-native';

import { Header, Page, Cadastre } from '../components';

class CadastreScreen extends Component {
  render() {

    return (
      <Page header={<Header />}>
        <Text>Cadastro</Text>
        <Cadastre />
      </Page>
    );
  }
}

export default CadastreScreen;
