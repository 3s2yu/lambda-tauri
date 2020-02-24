import React, { Component } from 'react';

import { UIButton, UIContent } from './button-style';

class Button extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
  }

  render() {
    const { children, onPress, theme, bg, underlayColor } = this.props;

    return (
      <UIButton underlayColor={underlayColor} onPress={onPress} bg={bg} underlayColor="#ccc">
        <UIContent>{children}</UIContent>
      </UIButton>
    );
  }
}

export default Button;
