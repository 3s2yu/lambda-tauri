import React, { Component } from 'react';
import { Header, Page, Cadastre } from '../components';

class CadastreScreen extends Component {
  render() {

    return (
      <Page header={<Header />}>
        <Cadastre />
      </Page>
    );
  }
}

export default CadastreScreen;
