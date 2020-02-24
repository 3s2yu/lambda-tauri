import React, { Component } from "react";
import { UIImage } from './avatar-style';

class Avatar extends Component {
  render() {
    const { hasImage, imagePath } = this.props;
    return hasImage ? <UIImage source={{ uri: imagePath }} /> : <UIImage source={{ uri: 'https://place-hold.it/100x100/ccc' }} />;
  }
}

export default Avatar;
