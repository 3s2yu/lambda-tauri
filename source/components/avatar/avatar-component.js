import React, { Component } from "react";
import { UIImage } from './avatar-style';

class Avatar extends Component {
  static defaultProps = {
    size: 60
  }

  render() {
    const { hasImage, imagePath, size } = this.props;
    return hasImage ? <UIImage source={{ uri: imagePath }} size={size} /> : <UIImage source={{ uri: 'https://place-hold.it/100x100/ccc' }} size={size} />;
  }
}

export default Avatar;
