import React, { Component } from 'react';
import { Header, Content, List } from '../components';

class SearchScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <List />
        </Content>
      </>
    );
  }
}

export default SearchScreen;
