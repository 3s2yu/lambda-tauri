import React, { Component } from 'react';
import { Header, Page, RegistrationForm } from '../components';

class RegistrationScreen extends Component {
  render() {
    const { name, birthDate, deathDate } = this.props.route.params;

    return (
      <Page header={<Header />}>
        <RegistrationForm data={{ name, birthDate, deathDate }} />
      </Page>
    );
  }
}

export default RegistrationScreen;
