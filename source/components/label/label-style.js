import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIContainer = styled.View`
  alignItems: center;
  background-color: ${props => props.bg};
  justifyContent: center;
  padding: 5px;
  width: 50%;
`;

export const UIText = styled.Text`
  color: #fff;
  font-size: 17px;
  textShadow: 0 0 3px rgba(0,0,0,0.6);
`;
