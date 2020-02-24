import React, { Component } from 'react';

import { UIContainer, UIText, UIFlag } from './label-style';

class Label extends Component {
  static defaultProps = {
    bg: '#fff',
    width: '50%'
  }

  render() {
    const { children, bg, width, daysLeft } = this.props;

    return (
      <UIContainer bg={bg} width={width}>
        <UIText>{children}</UIText>
        <UIFlag>{daysLeft}</UIFlag>
      </UIContainer>
    );
  }
}

export default Label;
