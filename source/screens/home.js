import React, { Component } from 'react';

import { Header, Page, List } from '../components';

class HomeScreen extends Component {
  render() {
    return (
      <Page header={<Header />} plus={true} navigation={this.props.navigation}>
        <List navigation={this.props.navigation} />
      </Page>
    );
  }
}

export default HomeScreen;
