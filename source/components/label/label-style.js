import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const UIContainer = styled.View`
  align-items: center;
  background-color: ${props => props.bg};
  border-top-width: 1px;
  border-top-color: rgba(0,0,0,0.2);
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  width: ${props => props.width};
`;

export const UIText = styled.Text`
  color: #fff;
  font-size: 17px;
  text-shadow: 0 0 3px rgba(0,0,0,0.8);
`;

export const UIIcon = styled.View`
  margin-right: 5px;
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
