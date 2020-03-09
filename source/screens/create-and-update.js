import React, { Component } from 'react';
import { Header, Page, CreateAndUpdateForm } from '../components';

class CreateAndUpdateScreen extends Component {
  render() {
    const { name, image, birthDate, deathDate } = this.props.route.params;

    return (
      <Page header={<Header />}>
        <CreateAndUpdateForm data={{ name, image, birthDate, deathDate }} />
      </Page>
    );
  }
}

export default CreateAndUpdateScreen;
