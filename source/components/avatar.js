import React, { Component } from "react";
import { Image } from "react-native";
import styled from 'styled-components/native';

const ImageView = styled.Image`
  border-radius: 4px;
  height: 100;
  width: 100;
`;

class Avatar extends Component {
  render() {
    const { hasImage, imagePath } = this.props;
    return hasImage ? <ImageView source={{ uri: imagePath }} /> : <ImageView source={{ uri: 'https://place-hold.it/100x100/ccc' }} />;
  }
}

export default Avatar;
