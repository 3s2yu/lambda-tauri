import React, { Component } from 'react';
import { Header, Page, RegistrationForm } from '../components';

class RegistrationScreen extends Component {
  render() {

    return (
      <Page header={<Header />}>
        <RegistrationForm />
      </Page>
    );
  }
}

export default RegistrationScreen;
