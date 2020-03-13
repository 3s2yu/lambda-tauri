import React, { Component } from "react";
import { UIImage } from './avatar-style';

class Avatar extends Component {
  static defaultProps = {
    size: 60
  }

  render() {
    const { image, size } = this.props;
    return image && image !== '' ? <UIImage source={{ uri: image }} size={size} /> : <UIImage source={{ uri: 'https://place-hold.it/100x100/ccc' }} size={size} />;
  }
}

export default Avatar;
