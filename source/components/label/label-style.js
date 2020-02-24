import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIContainer = styled.View`
  alignItems: center;
  background-color: ${props => props.bg};
  justifyContent: center;
  padding: 5px;
  width: ${props => props.width};
`;

export const UIText = styled.Text`
  color: #fff;
  font-size: 17px;
  textShadow: 0 0 3px rgba(0,0,0,0.6);
`;

export const UIFlag = styled.Text`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #a1a1a1;
  font-size: 14px;
  padding: 0 8px;
  position: absolute;
  bottom: -20px;
`;
