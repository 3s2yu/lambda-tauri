import React, { Component } from 'react';
;
import { Header, Page, List } from '../components';

class SearchScreen extends Component {
  render() {
    return (
      <Page header={<Header />}>
        <List navigation={this.props.navigation} />
      </Page>
    );
  }
}

export default SearchScreen;
