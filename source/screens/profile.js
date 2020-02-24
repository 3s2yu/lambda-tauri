import React, { Component } from 'react';
import { Text } from 'react-native';

import { Header, Page, Avatar } from '../components';

class ProfileScreen extends Component {
  render() {
    const { name, image } = this.props.route.params;

    return (
      <Page header={<Header />}>
        <Avatar hasImage={image.hasImage} imagePath={image.imagePath} />
        <Text>{name}</Text>
      </Page>
    );
  }
}

export default ProfileScreen;
